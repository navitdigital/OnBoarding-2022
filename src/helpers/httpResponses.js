const success = (body) => ({ statusCode: 200, body });

const badRequest = (message) => ({ statusCode: 400, body: { error: message } });

export { success, badRequest };
