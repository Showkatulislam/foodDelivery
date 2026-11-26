import { type RequestHandler } from "express";
import { type ZodType } from "zod";
type ValidationSource = "body" | "params" | "query";
export declare const validate: (schema: ZodType, source?: ValidationSource) => RequestHandler;
export {};
