// Simple authentication system using localStorage
// In production, this should be replaced with a proper backend API

export interface User {
  id: string
  email: string
  password: string
  role: 'admin' | 'investor'
  createdAt: string
  name?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Default admin user
const DEFAULT_ADMIN: User = {
  id: 'admin-1',
  email: 'admin@bintiflowtech.com',
  password: 'BintiAdmin2026!', // In production, this would be hashed
  role: 'admin',
  createdAt: new Date().toISOString(),
  name: 'Admin User'
}

// Initialize users in localStorage if not exists
export const initializeAuth = () => {
  if (typeof window === 'undefined') return

  const users = localStorage.getItem('binti_users')
  if (!users) {
    localStorage.setItem('binti_users', JSON.stringify([DEFAULT_ADMIN]))
  }
}

// Get all users
export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return []
  
  const users = localStorage.getItem('binti_users')
  return users ? JSON.parse(users) : [DEFAULT_ADMIN]
}

// Add a new user
export const addUser = (email: string, password: string, name?: string): User => {
  const users = getUsers()
  
  // Check if user already exists
  if (users.some(u => u.email === email)) {
    throw new Error('User with this email already exists')
  }

  const newUser: User = {
    id: `user-${Date.now()}`,
    email,
    password, // In production, this should be hashed
    role: 'investor',
    createdAt: new Date().toISOString(),
    name
  }

  users.push(newUser)
  localStorage.setItem('binti_users', JSON.stringify(users))
  
  return newUser
}

// Update a user
export const updateUser = (userId: string, updates: Partial<User>): User => {
  const users = getUsers()
  const userIndex = users.findIndex(u => u.id === userId)
  
  if (userIndex === -1) {
    throw new Error('User not found')
  }

  users[userIndex] = { ...users[userIndex], ...updates }
  localStorage.setItem('binti_users', JSON.stringify(users))
  
  return users[userIndex]
}

// Delete a user
export const deleteUser = (userId: string): void => {
  const users = getUsers()
  const filteredUsers = users.filter(u => u.id !== userId)
  localStorage.setItem('binti_users', JSON.stringify(filteredUsers))
}

// Authenticate user
export const authenticateUser = (email: string, password: string): User | null => {
  const users = getUsers()
  const user = users.find(u => u.email === email && u.password === password)
  
  if (user) {
    // Store current user in session
    sessionStorage.setItem('binti_current_user', JSON.stringify(user))
    return user
  }
  
  return null
}

// Get current user from session
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null
  
  const user = sessionStorage.getItem('binti_current_user')
  return user ? JSON.parse(user) : null
}

// Logout
export const logout = (): void => {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem('binti_current_user')
}

// Check if user is admin
export const isAdmin = (user: User | null): boolean => {
  return user?.role === 'admin'
}
