import { Router } from "express";

import * as controlador_metahumano from "../controladores/controlador_metahumano.js";
import { validarCampos } from '../middleware/validarCampos.js';
import { validarIdMetahumano, validarCrearMetahumano, validarUpdateMetahumano } from '../validators/metahumano.validator.js';
import { cache } from "../middleware/cache.js";
import { auth } from "../middleware/auth.js"

const router = Router();

//Rutas publicas
router.get('/', cache("Metahumanos"),controlador_metahumano.getMetahumanos);
router.get('/:id', validarIdMetahumano, validarCampos, cache("Metahumano"),controlador_metahumano.getMetahumanoById);

//Rutas protegidas
router.post('/', auth, validarCrearMetahumano, validarCampos,controlador_metahumano.createMetahumano);
router.put('/:id', auth, validarUpdateMetahumano, validarCampos,controlador_metahumano.actualizarMetahumano);
router.delete('/:id', auth, validarIdMetahumano, validarCampos,controlador_metahumano.eliminarMetaHumanoController);

export const router_metahumano = router;