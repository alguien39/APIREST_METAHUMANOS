import { verificarToken } from "../utils/jwt.js";
import {AppError} from "../utils/AppError.js";

export const auth = (req, res, next) =>{
    const authHeader = req.headers.authorization || req.headers['Authorization'];
    if (!authHeader) {
        return next(new AppError('No se ha provisionado ningun token', 401));
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

    try {
        const decoded = verificarToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return next(new AppError('Token invalido', 401));
    }
};