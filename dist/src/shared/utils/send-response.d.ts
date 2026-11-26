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
export declare function sendResponse<T>(res: Response, options: ISendResponse<T>): void;
