import { Router } from "express";
import * as Controlador from "../controladores/controlador_debilidad.js";

const router = Router();

router.get('/', Controlador.getDebilidad);
router.get('/:id', Controlador.getDebilidadById);
router.post('/',Controlador.createDebilidad);
router.put('/', Controlador.actualizarDebilidad);
router.delete('/:id', Controlador.eliminarDebilidad);

export const router_debilidad = router;