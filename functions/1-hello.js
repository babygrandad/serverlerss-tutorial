// domain/.netlify/functions/1-hello
exports.handler = async (event, context, callback) => {
    return {
        statusCode: 200,
        body: 'First Serverless function example'
    }
}