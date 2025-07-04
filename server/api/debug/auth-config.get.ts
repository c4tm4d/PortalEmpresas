export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    
    return {
      success: true,
      authSecretExists: !!config.auth?.secret,
      authSecretLength: config.auth?.secret ? config.auth.secret.length : 0,
      authSecretPreview: config.auth?.secret ? config.auth.secret.substring(0, 10) + '...' : 'none',
      siteUrl: config.public.siteUrl
    }
  } catch (error) {
    console.error('Auth config test error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}) 