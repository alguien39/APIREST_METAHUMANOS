import * as modelo from '../modelos/modelo_metahumanos.js';

export const getMetahumanos = async (req, res, next) =>{
    try{
        const [rows] = await modelo.getMetahumanos();
        res.json(rows);
    }
    catch(error){
        res.status(404).json({error: 'Metahumanos no encontrados'})
        next(error);
    }
};

export const getMetahumanoById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const [rows] = await modelo.getMetahumanoById(id);
        if(rows.length <= 0) {
            res.status(404).json({message: 'Metahumano no encontrado'})
        }
        res.json(rows);
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
        res.status(500).json({error:'Error al crear metahumano'})
        next(error);
    }
};

export const actualizarMetahumano = async (req, res, next) =>{
    try{
        const { id } = req.params;
        await modelo.updateMetaHumano(id, req.body);

        res.json({ mensaje: "MetaHumano actualizado correctamente" });
    }
    catch(error){
        res.status(500).json({error:'Error al actualizar metahumano'})
        next(error)
    }
};

export const eliminarMetaHumanoController = async (req, res) => {
    try {
        const { id } = req.params;
        await modelo.deleteMetaHumano(id);
        res.json({ mensaje: "MetaHumano eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar metahumano" });
        next(error);
    }
};