export default defineEventHandler(async (event) => {
  try {
    console.log('Testing session creation...')
    
    // Test 1: Simple session
    try {
      await setUserSession(event, { test: 'simple' })
      console.log('Simple session test: SUCCESS')
    } catch (error) {
      console.log('Simple session test: FAILED', error)
    }
    
    // Test 2: User session without user wrapper
    try {
      await setUserSession(event, {
        id: 1,
        email: 'test@example.com',
        name: 'Test User'
      })
      console.log('Direct user session test: SUCCESS')
    } catch (error) {
      console.log('Direct user session test: FAILED', error)
    }
    
    // Test 3: User session with user wrapper
    try {
      await setUserSession(event, {
        user: {
          id: 1,
          email: 'test@example.com',
          name: 'Test User'
        }
      })
      console.log('Wrapped user session test: SUCCESS')
    } catch (error) {
      console.log('Wrapped user session test: FAILED', error)
    }
    
    // Test 4: Get session
    try {
      const session = await getUserSession(event)
      console.log('Get session test: SUCCESS', session)
    } catch (error) {
      console.log('Get session test: FAILED', error)
    }
    
    return { success: true, message: 'Session tests completed' }
  } catch (error) {
    console.error('Session test error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}) 