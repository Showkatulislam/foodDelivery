import { type RequestHandler } from "express";
import { type ZodType } from "zod";
import { AppError } from "../errors/app-error.js";

type ValidationSource = "body" | "params" | "query";

export const validate = (schema: ZodType, source: ValidationSource = "body"): RequestHandler => {
    return (req, res, next): void => {
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
