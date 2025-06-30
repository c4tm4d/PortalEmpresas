export default defineNuxtRouteMiddleware(async (to) => {
  const { fetchUser, isAuthenticated } = useAuth()
  
  // Fetch user session if not already loaded
  if (!isAuthenticated.value) {
    await fetchUser()
  }
  
  // If still not authenticated, redirect to login
  if (!isAuthenticated.value) {
    return navigateTo('/auth/signin-light')
  }
}) 