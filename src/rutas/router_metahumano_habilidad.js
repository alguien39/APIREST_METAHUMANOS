import { Router } from "express";
import * as Controlador from "../controladores/controlador_metahumano_habilidad.js";

const router = Router();

router.get('/', Controlador.getMetahumanos_habilidad);
router.get('/metahumano/:id', Controlador.getMetahumanos_habilidadById_Metahumano);
router.get('/habilidad/:id', Controlador.getMetahumanos_habilidadById_Habilidad);
router.post('/', Controlador.createMetahumano_Habilidad);
router.delete('/:Id_Habilidad/:Id_Metahumano', Controlador.eliminarMetahumano_Habilidad);

export const router_metahumano_habilidad = router;