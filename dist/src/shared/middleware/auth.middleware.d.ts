import type { Request, Response, NextFunction } from "express";
export interface AuthenticatedRequest extends Request {
    user?: {
        sub: string;
        role: string;
    };
}
export declare const authenticate: (req: AuthenticatedRequest, _res: Response, next: NextFunction) => void;
