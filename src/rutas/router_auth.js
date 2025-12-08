import { Router } from "express";
import * as Controlador from '../controladores/controlador_Usuario.js';

const router = Router();

router.post('/login', Controlador.login);
router.post('/register', Controlador.register);

export const router_auth = router;