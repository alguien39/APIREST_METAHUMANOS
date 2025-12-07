import { verificarToken } from "../utils/jwt.js";
import {AppError} from "../utils/AppError.js";

export const auth = (req, res, next) =>{
    const token = req.headers.authorization?.split('')[1];
    if(!token) {
        return next(new AppError('No se ha provisionado ningun token', 401));
    }
    try {
        const decoded = verificarToken(token);
        req.user = decoded;
        next();
    } catch (error){
        let message = 'Token Invalido';

        if(error.name === 'TokenExpiredError') {
            message = 'Token Expirado'
        } else if (error.name === 'JsonWebTokenError') {
            message = 'Token Mal formado';
        }

        return next(new AppError(message,401));
    }
};