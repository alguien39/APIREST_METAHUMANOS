import bcrypt from 'bcryptjs';
import {generarToken} from '../utils/jwt.js';
import {loginUsuario, crearUsuario} from '../modelos/modelo_usuario.js';
import {AppError} from '../utils/AppError.js';
import { response } from "express";

export const login = async (req, res, next) => {
    try {
        const {Email, Password} = req.body;
        const [rows] = await loginUsuario(Email, Password);

        if (rows.length === 0 ){
            throw new AppError('Credenciales inválidas: USUARIO NO ENCONTRADO', 401);
        }

        const usuario = rows[0];
        const valido = await bcrypt.compare(Password, usuario.Contrasena);

        if (!valido) {
            throw new AppError('Credenciales inválidas', 401);
        }

        const token = generarToken({id: usuario.Id_Usuario, nombre: usuario.Nombre_Usuario});
        res.json({token});
        
    } catch (error) {
        next(error);
    }
};

export const register = async (req, res, next) =>{
    try {
        await crearUsuario(req.body);
        res.status(201).json({message:'Usuario Registrado Correctamente'})
    } catch (error) {
        next(error)
    }
};