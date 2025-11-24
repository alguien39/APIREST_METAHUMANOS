import * as modelo from '../modelos/modelo_metahumano_debilidad.js';

export const getMetaHumano_Debilidad = async(req,res,next)=>{
    try {
        const [rows] = await modelo.getMetaHumano_Debilidad();
        res.json(rows);
    } catch (error) {
        res.status(404).json({message:"Debilidades de metahumanos no encontradas"});
        next(error);    
    }
};

export const getMetaHumano_DebilidadById_Debilidad = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const [rows] = await modelo.getMetaHumano_DebilidadById_Debilidad(id);
        if(rows.length <= 0) {
            res.status(404).json({message: `Metahumanos con la debilidad ${id} no encontrados`});
        }
        res.json(rows);
    } catch (error) {
        next(error)
    }
}; 

export const getMetaHumano_DebilidadById_Metahumano = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const [rows] = await modelo.getMetaHumano_DebilidadById_Metahumano(id);
        if(rows.length <= 0) {
            res.status(404).json({message: `Debilidades del metahumano ${id} no encontradas`});
        }
        res.json(rows);
    } catch (error) {
        next(error)
    }
};

export const createMetahumano_Debilidad = async(req,res,next)=>{
    try {
        await modelo.createMetahumano_Debilidad(req.body);
        res.status(202).json({message:"Debilidad asignada al metahumano correctamente"});
    } catch (error) {
        res.status(500).json({error:'Error al crear metahumano y su debilidad'});
        next(error);
    }
};

export const eliminarMetahumanoDebilidad = async(req,res,next)=>{
    try {
        const { id_metahumano, id_debilidad } = req.params;
        await modelo.deleteMetahumano_Debilidad(id_debilidad,id_metahumano);
        res.json({ mensaje: "MetaHumano y su debilidad eliminados correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar MetaHumano y su debilidad" });
        next(error);
    }
};