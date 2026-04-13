export interface User {
  id: string
  email: string
  role: 'admin' | 'investor'
  createdAt: string
  name?: string
}

// Login user
export async function loginUser(email: string, password: string): Promise<User | null> {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.user
  } catch (error) {
    console.error('Login error:', error)
    return null
  }
}

// Get all users (investors only)
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch('/api/users')
    
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data = await response.json()
    return data.users
  } catch (error) {
    console.error('Get users error:', error)
    return []
  }
}

// Create new user
export async function createUser(email: string, password: string, name?: string): Promise<User | null> {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to create user')
    }

    const data = await response.json()
    return data.user
  } catch (error) {
    console.error('Create user error:', error)
    throw error
  }
}

// Delete user
export async function deleteUser(userId: string): Promise<boolean> {
  try {
    const response = await fetch(`/api/users?id=${userId}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Failed to delete user')
    }

    return true
  } catch (error) {
    console.error('Delete user error:', error)
    return false
  }
}

// Check if user is admin
export function isAdmin(user: User | null): boolean {
  return user?.role === 'admin'
}

// Session management (using sessionStorage for current user)
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null
  
  const userStr = sessionStorage.getItem('currentUser')
  if (!userStr) return null
  
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export function setCurrentUser(user: User): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem('currentUser', JSON.stringify(user))
}

export function clearCurrentUser(): void {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem('currentUser')
}

// Initialize database (call this once on app startup)
export async function initializeDatabase(): Promise<boolean> {
  try {
    const response = await fetch('/api/auth/init')
    return response.ok
  } catch (error) {
    console.error('Database initialization error:', error)
    return false
  }
}
