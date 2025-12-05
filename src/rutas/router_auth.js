import { Router } from "express";
import {login} from "../controladores/controlador_Usuario.js";

const router = Router();

router.post('/login', login);

export default router_auth = router;
