import { Router } from "express";

import * as controlador_metahumano from "../controladores/controlador_metahumano.js";
import { validarCampos } from '../middleware/validarCampos.js';
import { validarIdMetahumano, validarCrearMetahumano, validarUpdateMetahumano } from '../validators/metahumano.validator.js';

const router = Router();

router.get('/',controlador_metahumano.getMetahumanos);
router.get('/:id', validarIdMetahumano, validarCampos, controlador_metahumano.getMetahumanoById);
router.post('/', validarCrearMetahumano, validarCampos,controlador_metahumano.createMetahumano);
router.put('/:id', validarUpdateMetahumano, validarCampos,controlador_metahumano.actualizarMetahumano);
router.delete('/:id', validarIdMetahumano, validarCampos,controlador_metahumano.eliminarMetaHumanoController);

export const router_metahumano = router;