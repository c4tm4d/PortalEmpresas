export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session || !session.id) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

})
