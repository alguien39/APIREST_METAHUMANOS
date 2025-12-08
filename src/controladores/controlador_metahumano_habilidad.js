import * as modelo from '../modelos/modelo_metahumano_habilidad.js';
import { AppError } from '../utils/AppError.js';

export const getMetahumanos_habilidad = async (req,res,next)=>{
    try{
        const[rows] = await modelo.getMetaHumano_Habilidad();
        if(rows.length <= 0){
            throw new AppError("habilidades de metahumanos encontradas pero vacías", 404);
        }
        res.status(200).json(rows);
    }
    catch(error){
        next(error);
    }
};

export const getMetahumanos_habilidadById_Metahumano= async (req,res,next)=>{
    try {
        const{id} = req.params;
        const [rows] = await modelo.getMetaHumano_HabilidadById_Metahumano(id);
        if(rows.length <= 0 ){
            throw new AppError(`habilidades del metahumano ${id} no encontrado`,404);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};

export const getMetahumanos_habilidadById_Habilidad= async (req,res,next)=>{
    try {
        const{id} = req.params;
        const [rows] = await modelo.getMetaHumano_HabilidadById_Habilidad(id);
        if(rows.length <= 0 ){
            throw new AppError(`metahumanos con la habilidad ${id} no encontrados`,404);
        }
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};

export const createMetahumano_Habilidad= async (req,res,next)=>{
    try {
        await modelo.createMetahumano_Habilidad(req.body);
        res.status(201).json({message:"Habilidad asociada a metahumano correctamente"});
    } catch (error) {
        next(error);
    }
};

export const eliminarMetahumano_Habilidad = async (req,res,next)=>{
    try {
        const {id_Metahumano, Id_Habilidad} = req.params;
        await modelo.deleteMetahumano_Habilidad(id_habilidad, id_metahumano);
        res.status(200).json({message:"Habilidad eliminada del metahumano exitosamente"});
    } catch (error) {
        next(error);
    }
};