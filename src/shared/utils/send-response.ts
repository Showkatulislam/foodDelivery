import type { Response } from "express";

export interface IPaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface ISendResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
    meta?: IPaginationMeta;
}

export function sendResponse<T>(res: Response, options: ISendResponse<T>): void {
    const { statusCode, success, message, data, meta } = options;

    res.status(statusCode).json({
        success,
        message,
        ...(data !== undefined && { data }),
        ...(meta !== undefined && { meta }),
    });
}
