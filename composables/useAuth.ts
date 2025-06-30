export const useAuth = () => {
  const user = useState<any>('user', () => null)
  const isLoading = useState<boolean>('auth-loading', () => true)

  const fetchUser = async () => {
    try {
      isLoading.value = true
      const userData = await $fetch('/api/auth/me')
      user.value = userData
    } catch (error) {
      user.value = null
    } finally {
      isLoading.value = false
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })
      await fetchUser()
      return { success: true, data: response }
    } catch (error: any) {
      return { success: false, error: error.data?.message || 'Login failed' }
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await $fetch('/api/auth/register', {
        method: 'POST',
        body: { name, email, password }
      })
      await fetchUser()
      return { success: true, data: response }
    } catch (error: any) {
      return { success: false, error: error.data?.message || 'Registration failed' }
    }
  }

  const logout = async () => {
    try {
      await $fetch('/api/auth/logout', { method: 'POST' })
      user.value = null
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Logout failed' }
    }
  }

  const isAuthenticated = computed(() => !!user.value)

  return {
    user: readonly(user),
    isLoading: readonly(isLoading),
    isAuthenticated,
    fetchUser,
    login,
    register,
    logout
  }
} 