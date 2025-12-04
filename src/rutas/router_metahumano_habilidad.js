import { Router } from "express";
import * as Controlador from "../controladores/controlador_metahumano_habilidad.js";
import {validarCampos} from "../middleware/validarCampos.js";
import {validarCreateMetahumanoHabilidad} from "../validators/metahumano_habilidad.validator.js";
import {validarIdMetahumano} from "../validators/metahumano.validator.js";
import {validarIdHabilidad} from "../validators/habilidad.validator.js";

const router = Router();

router.get('/', Controlador.getMetahumanos_habilidad);
router.get('/metahumano/:id', validarIdMetahumano, validarCampos, Controlador.getMetahumanos_habilidadById_Metahumano);
router.get('/habilidad/:id', validarIdHabilidad, validarCampos, Controlador.getMetahumanos_habilidadById_Habilidad);
router.post('/', validarCreateMetahumanoHabilidad, validarCampos, Controlador.createMetahumano_Habilidad);
router.delete('/:Id_Habilidad/:Id_Metahumano', validarIdMetahumano, validarIdHabilidad, validarCampos, Controlador.eliminarMetahumano_Habilidad);

export const router_metahumano_habilidad = router;