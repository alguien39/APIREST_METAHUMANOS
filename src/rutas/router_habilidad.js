import { Router } from "express";

import * as controlador from "../controladores/controlador_habilidad.js";
import { validarCampos } from "../middleware/validarCampos.js";
import * as validator from "../validators/habilidad.validator.js"

const router = Router();

router.get('/', controlador.getHabilidades);
router.get('/:id',validator.validarIdHabilidad,validarCampos, controlador.getHabilidadById);
router.post('/',validator.validarCrearHabilidad, validarCampos, controlador.createHabilidad);
router.put('/:id',validator.validarUpdateHabilidad, validarCampos, controlador.actualizarHabilidad);
router.delete('/:id',validator.validarIdHabilidad, validarCampos, controlador.eliminarHabilidad);

export const router_Habilidad = router;