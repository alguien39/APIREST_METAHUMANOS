import { Router } from "express";
import * as Controlador from "../controladores/controlador_metahumano_debilidad.js";
import { validarCampos } from "../middleware/validarCampos.js";
import {validarCrearMetahumano_Debilidad} from "../validators/metahumano_debilidad.validator.js";
import { validarIdMetahumano } from "../validators/metahumano.validator.js";
import { validarIdDebilidad } from "../validators/debilidad.validator.js";

const router = Router();

router.get('/', Controlador.getMetaHumano_Debilidad);
router.get('/metahumano/:id',validarIdMetahumano, validarCampos, Controlador.getMetaHumano_DebilidadById_Metahumano);
router.get('/habilidad/:id',validarIdDebilidad, validarCampos, Controlador.getMetaHumano_DebilidadById_Debilidad);
router.post('/',validarCrearMetahumano_Debilidad, validarCampos, Controlador.createMetahumano_Debilidad);
router.delete('/:Id_Debilidad/:Id_Metahumano',validarIdDebilidad, validarIdMetahumano, validarCampos, Controlador.eliminarMetahumanoDebilidad);

export const router_metahumano_debilidad = router;