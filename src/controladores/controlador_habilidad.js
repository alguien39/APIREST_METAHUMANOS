import * as modelo from '../modelos/modelo_habilidad.js'
import { AppError } from '../utils/AppError.js';

export const getHabilidades = async(req, res, next)=>{
    try {
        const [rows] = await modelo.getHabilidad();
        if(rows.length === 0){
            throw new AppError("Habilidades no encontradas", 404);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};

export const getHabilidadById = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const [rows] = await modelo.getHabilidadById(id);
        if(rows.length === 0){
            throw new AppError(`Habilidad con id ${id} no encontrada`, 404);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error);        
    }
};

export const createHabilidad = async(req,res,next)=>{
    try {
        await modelo.createHabilidad(req.body);
        res.status(201).json({message:"Habilidad creada exitosamente"});
    } catch (error) {
        next(error);
    }
};

export const actualizarHabilidad = async(req,res,next)=>{
    try {
        const {id} = req.params;
        await modelo.updateHabilidad(id, req.body);
        res.status(200).json({message:"Habilidad Actualizada Correctamente"});
    } catch (error) {
        next(error);
    }
};

export const eliminarHabilidad = async(req,res,next)=>{
    try {
        const {id} = req.params;
        await modelo.deleteHabilidad(id);
        res.status(200).json({message:"Habilidad Eliminada"})
    } catch (error) {
        next(error);
    }
};