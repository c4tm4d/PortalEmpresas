export async function hash(password: string): Promise<string> {
  // Convert password to buffer
  const encoder = new TextEncoder()
  const data = encoder.encode(password)

  // Generate random salt
  const salt = crypto.getRandomValues(new Uint8Array(16))

  // Combine password and salt
  const combinedBuffer = new Uint8Array([...salt, ...data])

  // Hash the combined buffer
  const hashBuffer = await crypto.subtle.digest('SHA-256', combinedBuffer)

  // Convert to base64
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashBase64 = btoa(String.fromCharCode(...hashArray))
  const saltBase64 = btoa(String.fromCharCode(...salt))

  // Return combined salt and hash
  return `${saltBase64}:${hashBase64}`
}

export async function verify(password: string, storedHash: string): Promise<boolean> {
  try {
    // Split stored value into salt and hash
    const [saltBase64, hashBase64] = storedHash.split(':')

    // Convert base64 salt back to Uint8Array
    const salt = new Uint8Array(
      atob(saltBase64)
        .split('')
        .map(c => c.charCodeAt(0))
    )

    // Encode password
    const encoder = new TextEncoder()
    const data = encoder.encode(password)

    // Combine salt and password
    const combinedBuffer = new Uint8Array([...salt, ...data])

    // Hash the combined buffer
    const hashBuffer = await crypto.subtle.digest('SHA-256', combinedBuffer)

    // Convert to base64
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const newHashBase64 = btoa(String.fromCharCode(...hashArray))

    // Compare hashes
    return hashBase64 === newHashBase64
  }
  catch (error) {
    console.error('Password verification error:', error)
    return false
  }
}
