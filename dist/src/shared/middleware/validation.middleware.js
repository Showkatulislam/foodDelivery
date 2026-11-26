import { AppError } from "../errors/app-error.js";
export const validate = (schema, source = "body") => {
    return (req, res, next) => {
        const result = schema.safeParse(req[source]);
        if (!result.success) {
            const message = result.error.issues
                .map((issue) => {
                const path = issue.path.join(".");
                return `${path}: ${issue.message}`;
            })
                .join(", ");
            return next(new AppError(message, 400, "VALIDATION_ERROR"));
        }
        res.locals.validated = result.data;
        next();
    };
};
//# sourceMappingURL=validation.middleware.js.map