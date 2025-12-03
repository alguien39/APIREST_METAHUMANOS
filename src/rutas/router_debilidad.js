import { Router } from "express";

import * as Controlador from "../controladores/controlador_debilidad.js";
import { validarCampos } from "../middleware/validarCampos.js";
import { validarIdDebilidad, validarCrearDebilidad, validarUpdateDebilidad } from "../validators/debilidad.validator.js";

const router = Router();

router.get('/', Controlador.getDebilidad);
router.get('/:id', validarIdDebilidad, validarCampos, Controlador.getDebilidadById);
router.post('/',validarCrearDebilidad, validarCampos, Controlador.createDebilidad);
router.put('/',validarUpdateDebilidad, validarCampos, Controlador.actualizarDebilidad);
router.delete('/:id',validarIdDebilidad, validarCampos, Controlador.eliminarDebilidad);

export const router_debilidad = router;