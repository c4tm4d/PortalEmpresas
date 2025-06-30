import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)

  if (!session.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const form = await readFormData(event)
  
  // Find the first valid file in the form data
  let file: File | undefined;
  for (const [key, value] of form.entries()) {
    if (key === 'file' && value instanceof File && value.size > 0) {
      file = value;
      break; // Use the first valid file found
    }
  }

  if (!file) {
    console.error('No valid file found in FormData. Entries:', [...form.entries()]);
    throw createError({ statusCode: 400, message: 'No valid file provided' })
  }

  // Manually validate the file
  const allowedTypes = ['image/jpeg', 'image/png']
  if (!file.type || !allowedTypes.includes(file.type)) {
    throw createError({ statusCode: 400, message: `File type not allowed. Received: ${file.type}` })
  }
  const maxSize = 8 * 1024 * 1024 // 8MB
  if (file.size > maxSize) {
    throw createError({ statusCode: 400, message: 'File is too large.' })
  }

  // Use hubBlob().put() to upload the file
  const blob = await hubBlob().put(file.name, file, {
    addRandomSuffix: true,
    prefix: 'business-photos',
    contentType: file.type
  })

  // Return the pathname as a plain text response for FilePond
  return blob.pathname
}) 