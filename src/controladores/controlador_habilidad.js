import * as modelo from '../modelos/modelo_habilidad.js'

export const getHabilidades = async(req, res, next)=>{
    try {
        const [rows] = await modelo.getHabilidad();
        res.json(rows);
    } catch (error) {
        res.status(404).json({error:'Habilidades no encontradas'})
        next(error);
    }
};

export const getHabilidadById = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const [rows] = await modelo.getHabilidadById(id);
        if(rows.length <= 0){
            return res.status(404).json({message:`Habilidad: "${id}" no encontrada`});
        }
    } catch (error) {
        next(error);        
    }
};

export const createHabilidad = async(req,res,next)=>{
    try {
        await modelo.createHabilidad(req.body);
        res.status(201).json({message:"Habilidad creado exitosamente"});
    } catch (error) {
        res.status(500).json({message:"Error al crear habilidad"});
        next(error);
    }
};

export const actualizarHabilidad = async(req,res,next)=>{
    try {
        const {id} = req.params;
        await modelo.updateHabilidad(id, req.body);
        res.json({message:"Habilidad Actualizada Correctamete"});
    } catch (error) {
        res.status(500).json({message:"Erroal al actualizar Habilidad"});
        next(error);
    }
};