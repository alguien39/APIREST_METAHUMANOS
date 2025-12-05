import { verificarToken } from "../utils/jwt";
import {AppError} from "../utils/errorHandler";

export const auth = (req, res, next) =>{
    const token = req.headers.authorization?.split('')[1];
    if(!token){
        return next(new AppError('No token provided', 401));
    }
    try{
        const decoded = verificarToken(token);
        req.user = decoded;
        next();
    } catch (error){
        return next (new AppError ('Invalid token', 401));
    }
};