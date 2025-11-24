import * as modelo from '../modelos/modelo_metahumano_habilidad.js';

export const getMetahumanos_habilidad = async (req,res,next)=>{
    try{
        const[rows] = await modelo.getMetaHumano_Habilidad();
        res.json(rows);
    }
    catch(error){
        res.status(404).json({error:"habilidades de metahumanos no encontradas"});
        next(error);
    }
};

export const getMetahumanos_habilidadById_Metahumano= async (req,res,next)=>{
    try {
        const{id} = req.params;
        const [rows] = await modelo.getMetaHumano_HabilidadById_Metahumano(id);
        if(rows.length <= 0 ){
            res.status(404).json({message:`habilidades del metahumano ${id} no encontrado`});
        }
        res.json(rows);
    } catch (error) {
        next(error);
    }
};

export const getMetahumanos_habilidadById_Habilidad= async (req,res,next)=>{
    try {
        const{id} = req.params;
        const [rows] = await modelo.getMetaHumano_HabilidadById_Habilidad(id);
        if(rows.length <= 0 ){
            res.status(404).json({message:`metahumanos con la habilidad ${id} no encontrados`});
        }
        res.json(rows);
    } catch (error) {
        next(error);
    }
};

export const createMetahumano_Habilidad= async (req,res,next)=>{
    try {
        await modelo.createMetahumano_Habilidad(req.body)
        res.json({message:"Habilidad asociada a metahumano correctamente"});
    } catch (error) {
        res.status(500).json({error:'Error al asignar la habilidad a el metahumano'})
        next(error);
    }
};

export const eliminarMetahumano_Habilidad = async (req,res,next)=>{
    try {
        const {id_Metahumano, Id_Habilidad} = req.params;
        const [rows] = await modelo.deleteMetahumano_Habilidad(Id_Habilidad, id_Metahumano);
        res.json({message:"Habilidad eliminada del metahumano exitosamente"});
    } catch (error) {
        res.status(500).json({message:"Error al eliminar habilidad"});
        next(error);
    }
};