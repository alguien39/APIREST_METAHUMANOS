import { Router } from "express";
import * as Controlador from "../controladores/controlador_metahumano_debilidad.js";
import { validarCampos } from "../middleware/validarCampos.js";
import {validarCrearMetahumano_Debilidad} from "../validators/metahumano_debilidad.validator.js";
import { validarIdMetahumano } from "../validators/metahumano.validator.js";
import { validarIdDebilidad } from "../validators/debilidad.validator.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get('/', auth, Controlador.getMetaHumano_Debilidad);
router.get('/metahumano/:id', auth,validarIdMetahumano, validarCampos, Controlador.getMetaHumano_DebilidadById_Metahumano);
router.get('/debilidad/:id', auth, validarIdDebilidad, validarCampos, Controlador.getMetaHumano_DebilidadById_Debilidad);
router.post('/', auth,validarCrearMetahumano_Debilidad, validarCampos, Controlador.createMetahumano_Debilidad);
router.delete('/:id_debilidad/:id_metahumano', auth,validarIdDebilidad, validarIdMetahumano, validarCampos, Controlador.eliminarMetahumanoDebilidad);

export const router_metahumano_debilidad = router;