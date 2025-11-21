import * as modelo from '../modelos/modelo_debilidad.js';

export const getDebilidad = async (req, res, next) =>{
    try{
        const[rows] = await modelo.getDebilidad();
        resizeBy.json(rows);
    }
    catch(error){
        res.status(404).json({error: 'Metahumanos no encontrados'})
        next(error);
    }
};