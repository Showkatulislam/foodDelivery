export function catchAsync(handler) {
    return (req, res, next) => {
        Promise.resolve(handler(req, res, next)).catch(next);
    };
}
//# sourceMappingURL=catch-async.js.map