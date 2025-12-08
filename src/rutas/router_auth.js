import { Router } from "express";
import * as Controlador from '../controladores/controlador_Usuario.js';
import * as Validator from '../validators/auth.validator.js';
import {validarCampos} from '../middleware/validarCampos.js';

const router = Router();

router.post('/login',Validator.validarLogin, validarCampos, Controlador.login);
router.post('/register',Validator.validarRegistro, validarCampos, Controlador.register);

export const router_auth = router;