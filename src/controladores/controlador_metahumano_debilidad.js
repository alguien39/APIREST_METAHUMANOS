import * as modelo from '../modelos/modelo_metahumano_debilidad.js';
import { AppError } from '../utils/AppError.js';

export const getMetaHumano_Debilidad = async(req,res,next)=>{
    try {
        const [rows] = await modelo.getMetaHumano_Debilidad();
        if(rows.length = 0){
            throw new AppError("Ninguna debilidad de metahumanos encontrada",404);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error);    
    }
};

export const getMetaHumano_DebilidadById_Debilidad = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const [rows] = await modelo.getMetaHumano_DebilidadById_Debilidad(id);
        if(rows.length = 0) {
            throw new AppError(`Metahumanos con la debilidad ${id} no encontrados`, 204);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error)
    }
}; 

export const getMetaHumano_DebilidadById_Metahumano = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const [rows] = await modelo.getMetaHumano_DebilidadById_Metahumano(id);
        if(rows.length <= 0) {
            throw new AppError(`Debilidades del metahumano ${id} no encontradas`, 204);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error)
    }
};

export const createMetahumano_Debilidad = async(req,res,next)=>{
    try {
        await modelo.createMetahumano_Debilidad(req.body);
        res.status(202).json({message:"Debilidad asignada al metahumano correctamente"});
    } catch (error) {
        next(error);
    }
};

export const eliminarMetahumanoDebilidad = async(req,res,next)=>{
    try {
        const { id_metahumano, id_debilidad } = req.params;
        await modelo.deleteMetahumano_Debilidad(id_debilidad,id_metahumano);
        res.status(200).json({ mensaje: "MetaHumano y su debilidad eliminados correctamente" });
    } catch (error) {
        next(error);
    }
};