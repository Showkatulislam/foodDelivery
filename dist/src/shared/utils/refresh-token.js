import { createHash, randomBytes } from "node:crypto";
export const generateRefreshToken = () => {
    return randomBytes(64).toString("hex");
};
export const hashRefreshToken = (token) => {
    return createHash("sha256").update(token).digest("hex");
};
//# sourceMappingURL=refresh-token.js.map