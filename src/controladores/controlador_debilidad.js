import * as modelo from '../modelos/modelo_debilidad.js';

export const getDebilidad = async (req, res, next) =>{
    try{
        const[rows] = await modelo.getDebilidad();
        res.json(rows);
    }
    catch(error){
        res.status(404).json({error: 'Debilidades No encontradas no encontrados'})
        next(error);
    }
};

export const getDebilidadById = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const [rows] =  await modelo.getDebilidadById(id);
        if(rows.length <= 0){
            throw new Error(`Error: Debilidad "${id}" no encontrada`);
        }
        res.json(rows);
    }
    catch(error){
        return res.status(404)
        next(error);
    }
};

export const createDebilidad = async (req, res, next) => {
    try{
        await modelo.createDebilidad(req.body);
        res.status(201).json({message:'debilidad creada'});
    }
    catch(error){
        res.status(500)
        next(error);
    }
};

export const actualizarDebilidad = async (req, res, next) =>{
    try{
        const {id} = req.params;
        await modelo.updateDebilidad(id, req.body);
        res.json({message: "Debilidad actualizada correctamente"});
    }
    catch(error){
        res.status(500);
        next(error);
    }
};

export const eliminarDebilidad = async (req, res, next) => {
    try {
        const {id} = req.params;
        await modelo.deleteDebilidad(id);
        res.json({message: "Debilidad eleminiada correctamente"});
    } catch (error) {
        res.status(500).json({message:"Error al eliminar Debilidad"});
        next(error);
    }
};