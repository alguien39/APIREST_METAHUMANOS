import { Router } from "express";
import * as Controlador from "../controladores/controlador_metahumano_debilidad.js";

const router = Router();

router.get('/', Controlador.getMetaHumano_Debilidad);
router.get('/metahumano/:id', Controlador.getMetaHumano_DebilidadById_Metahumano);
router.get('/habilidad/:id', Controlador.getMetaHumano_DebilidadById_Debilidad);
router.post('/', Controlador.createMetahumano_Debilidad);
router.delete('/:Id_Habilidad/:Id_Metahumano', Controlador.eliminarMetahumanoDebilidad);

export const router_metahumano_debilidad = router;