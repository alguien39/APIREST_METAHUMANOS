import { Router } from "express";

import * as controlador from "../controladores/controlador_habilidad.js";

const router = Router();

router.get('/', controlador.getHabilidades);
router.get('/:id', controlador.getHabilidadById);
router.post('/',controlador.createHabilidad);
router.put('/:id', controlador.actualizarHabilidad);
router.delete('/:id', controlador.eliminarHabilidad);

export const router_Habilidad = router;