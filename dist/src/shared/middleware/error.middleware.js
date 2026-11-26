import { AppError } from "../errors/app-error.js";
import { logger } from "../logger/logger.js";
import { env } from "../../config/env.js";
export const errorHandler = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        logger.warn({
            errorCode: error.errorCode,
            statusCode: error.statusCode,
            message: error.message,
        }, "Operational application error");
        res.status(error.statusCode).json({
            success: false,
            message: error.message,
            errorCode: error.errorCode,
        });
        return;
    }
    logger.error({
        err: error,
    }, "Unexpected application error");
    res.status(500).json({
        success: false,
        message: "Internal server error",
        errorCode: "INTERNAL_SERVER_ERROR",
        ...(env.NODE_ENV === "development" && error instanceof Error ? { stack: error.stack } : {}),
    });
};
//# sourceMappingURL=error.middleware.js.map