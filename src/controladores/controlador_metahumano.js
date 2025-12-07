import * as modelo from '../modelos/modelo_metahumanos.js';
import { AppError } from '../utils/AppError.js';

export const getMetahumanos = async (req, res, next) =>{
    try{
        const [rows] = await modelo.getMetahumanos();
        if(rows.length === 0){
            throw new AppError("Ningun Metahumano Encontrado",404)
        }
       res.status(200).json(rows);
    }
    catch(error){
        next(error);
    }
};

export const getMetahumanoById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const [rows] = await modelo.getMetahumanoById(id);
        if(rows.length <= 0) {
            throw new AppError('Metahumano no encontrado',404);
        }
        res.status(200).json(rows[0]);
    }
    catch(error){
        next(error);
    }
};

export const createMetahumano = async (req, res, next)=>{
    try{
        await modelo.createMetahumano(req.body);
        res.status(201).json({message:'Metahumano Creado Exitosamente'})
    }
    catch(error){
        next(error);
    }
};

export const actualizarMetahumano = async (req, res, next) =>{
    try{
        const { id } = req.params;
        await modelo.updateMetaHumano(id, req.body);
        res.status(200).json({ message: "MetaHumano actualizado correctamente" });
    }
    catch(error){
        next(error)
    }
};

export const eliminarMetaHumanoController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const resultado = await modelo.deleteMetaHumano(id);
        if (resultado.affectedRows === 0) {
            throw new AppError(`Metahumano con id ${id} no encontrado`, 404);
        }
        res.status(200).json({message: "MetaHumano eliminado correctamente"});
    } catch (error) {
        next(error);
    }
};