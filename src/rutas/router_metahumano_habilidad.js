import { Router } from "express";
import * as Controlador from "../controladores/controlador_metahumano_habilidad.js";
import {validarCampos} from "../middleware/validarCampos.js";
import {validarCreateMetahumanoHabilidad, validarDeleteMetahumanoHabilidad} from "../validators/metahumano_habilidad.validator.js";
import {validarIdMetahumano} from "../validators/metahumano.validator.js";
import {validarIdHabilidad} from "../validators/habilidad.validator.js";
import {auth} from "../middleware/auth.js"

const router = Router();

router.get('/', auth, Controlador.getMetahumanos_habilidad);
router.get('/metahumano/:id', auth, validarIdMetahumano, validarCampos, Controlador.getMetahumanos_habilidadById_Metahumano);
router.get('/habilidad/:id', auth, validarIdHabilidad, validarCampos, Controlador.getMetahumanos_habilidadById_Habilidad);
router.post('/', auth, validarCreateMetahumanoHabilidad, validarCampos, Controlador.createMetahumano_Habilidad);
router.delete(['/habilidad/:id_habilidad/metahumano/:id_metahumano','/metahumano/:id_metahumano/habilidad/:id_habilidad'], auth, validarDeleteMetahumanoHabilidad, validarCampos, Controlador.eliminarMetahumano_Habilidad);

export const router_metahumano_habilidad = router;