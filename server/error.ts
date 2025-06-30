import type { H3Error } from 'h3'

export default function (error: H3Error, event: unknown) {
  // Log the error with additional context
  console.error('Server error:', {
    message: error.message,
    statusCode: error.statusCode,
    stack: error.stack,
    url: (event as { path?: string })?.path || 'unknown path',
    method: (event as { method?: string })?.method || 'unknown method'
  })

  // Return error response with message and stack trace
  return {
    statusCode: error.statusCode || 500,
    message: error.message || 'An error occurred while processing your request',
    stack: error.stack
  }
}
