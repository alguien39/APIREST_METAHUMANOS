import { Router } from "express";

import * as Controlador from "../controladores/controlador_debilidad.js";
import { validarCampos } from "../middleware/validarCampos.js";
import { validarIdDebilidad, validarCrearDebilidad, validarUpdateDebilidad } from "../validators/debilidad.validator.js";
import {auth} from "../middleware/auth.js"

const router = Router();

//Rutas publicas
router.get('/', Controlador.getDebilidad);
router.get('/:id', validarIdDebilidad, validarCampos, Controlador.getDebilidadById);

//Rutas protegidas
router.post('/',auth, validarCrearDebilidad, validarCampos, Controlador.createDebilidad);
router.put('/:id',auth, validarUpdateDebilidad, validarCampos, Controlador.actualizarDebilidad);
router.delete('/:id', auth, validarIdDebilidad, validarCampos, Controlador.eliminarDebilidad);

export const router_debilidad = router;