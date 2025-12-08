import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generarToken = (payload, secret, options) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
};

export const verificarToken = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET);
};