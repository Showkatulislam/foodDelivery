export function sendResponse(res, options) {
    const { statusCode, success, message, data, meta } = options;
    res.status(statusCode).json({
        success,
        message,
        ...(data !== undefined && { data }),
        ...(meta !== undefined && { meta }),
    });
}
//# sourceMappingURL=send-response.js.map