import * as modelo from '../modelos/modelo_debilidad.js';
import { AppError } from "../utils/AppError.js";

export const getDebilidad = async (req, res, next) =>{
    try{
        const[rows] = await modelo.getDebilidad();
        if (rows.length > 0){
            throw new AppError("Metahumanos no encontrados", 404);
        }
        res.status(200).json(rows);
    }
    catch(error){
        next(error);
    }
};

export const getDebilidadById = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const [rows] =  await modelo.getDebilidadById(id);
        if(rows.length <= 0){
            throw new AppError(`Error: Debilidad "${id}" no encontrada`, 404);
        }
        res.status(200).json(rows);
    }
    catch(error){
        next(error);
    }
};

export const createDebilidad = async (req, res, next) => {
    try{
        await modelo.createDebilidad(req.body);
        res.status(201).json({message:'debilidad creada'});
    }
    catch(error){
        next(error);
    }
};

export const actualizarDebilidad = async (req, res, next) =>{
    try{
        const {id} = req.params;
        await modelo.updateDebilidad(id, req.body);
        res.status(200).json({message: "Debilidad actualizada correctamente"});
    }
    catch(error){
        next(error);
    }
};

export const eliminarDebilidad = async (req, res, next) => {
    try {
        const {id} = req.params;
        await modelo.deleteDebilidad(id);
        res.status(200).json({message: "Debilidad eleminiada correctamente"});
    } catch (error) {
        error.message = "Error al eliminar Debilidad";
        next(error);
    }
};