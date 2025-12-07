import { Router } from "express";
import * as Controlador from "../controladores/controlador_habilidad.js";
import { validarCampos } from "../middleware/validarCampos.js";
import * as validator from "../validators/habilidad.validator.js"
import { auth } from "../middleware/auth.js";

const router = Router();

//Rutas Publicas
router.get('/', Controlador.getHabilidades);
router.get('/:id', validator.validarIdHabilidad,validarCampos, Controlador.getHabilidadById);

//Rutas protegidas
router.post('/',auth, validator.validarCrearHabilidad, validarCampos, Controlador.createHabilidad);
router.put('/:id',auth, validator.validarUpdateHabilidad, validarCampos, Controlador.actualizarHabilidad);
router.delete('/:id',auth, validator.validarIdHabilidad, validarCampos, Controlador.eliminarHabilidad);

export const router_Habilidad = router;