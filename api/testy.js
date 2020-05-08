exports.handler = async (event, context) => {
  const message = 'yup, it works'

  return {
    statusCode: 200,
    body: JSON.stringify({ message })
  }
}
