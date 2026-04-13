'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Users, Plus, Trash2, Eye, LogOut, Shield, Mail } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { getUsers, createUser, deleteUser as deleteUserApi, isAdmin, User } from '@/lib/auth-api'

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [showAddUser, setShowAddUser] = useState(false)
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const { user, logout } = useAuth()

  useEffect(() => {
    if (!user || !isAdmin(user)) {
      router.push('/admin/login')
      return
    }
    loadUsers()
  }, [user, router])

  const loadUsers = async () => {
    const allUsers = await getUsers()
    setUsers(allUsers)
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      await createUser(newUserEmail, newUserPassword, newUserName)
      setSuccess(`User ${newUserEmail} created successfully!`)
      setNewUserEmail('')
      setNewUserPassword('')
      setNewUserName('')
      setShowAddUser(false)
      await loadUsers()
    } catch (err: any) {
      setError(err.message || 'Failed to create user')
    }
  }

  const handleDeleteUser = async (userId: string, email: string) => {
    if (confirm(`Are you sure you want to delete user ${email}?`)) {
      await deleteUserApi(userId)
      setSuccess(`User ${email} deleted successfully`)
      await loadUsers()
    }
  }

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  const handleViewProposal = () => {
    router.push('/investors/proposal')
  }

  if (!user || !isAdmin(user)) {
    return null
  }

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage investor access to the investment proposal</p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProposal}
              className="px-6 py-3 bg-binti-purple text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-purple-600 transition-colors"
            >
              <Eye className="w-5 h-5" />
              View Proposal
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-black transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-binti-red rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Total Investors</p>
                <p className="text-3xl font-bold text-black">{users.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-binti-purple rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Admin User</p>
                <p className="text-lg font-bold text-black">{user.email}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAddUser(true)}
              className="w-full h-full flex items-center justify-center gap-3 text-binti-red font-bold text-lg"
            >
              <Plus className="w-6 h-6" />
              Add New Investor
            </motion.button>
          </motion.div>
        </div>

        {/* Messages */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600"
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600"
          >
            {success}
          </motion.div>
        )}

        {/* Add User Form */}
        {showAddUser && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-black mb-6">Add New Investor</h2>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all"
                    placeholder="Investor name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all"
                    placeholder="investor@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="text"
                  value={newUserPassword}
                  onChange={(e) => setNewUserPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-binti-red focus:border-binti-red transition-all"
                  placeholder="Create a password for the investor"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 bg-binti-red text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  Create Investor Account
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddUser(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-black">Investor Accounts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      No investors yet. Add your first investor to get started.
                    </td>
                  </tr>
                ) : (
                  users.map((investorUser) => (
                    <tr key={investorUser.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {investorUser.name || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {investorUser.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(investorUser.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteUser(investorUser.id, investorUser.email)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
