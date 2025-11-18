import { Router } from "express";

import * as controlador_metahumano from "../controladores/controlador_metahumano.js";

const router = Router();

router.get('/', controlador_metahumano.getMetahumanos);
router.get('/:id', controlador_metahumano.getMetahumanoById);
router.post('/', controlador_metahumano.createMetahumano);
router.put('/:id', controlador_metahumano.actualizarMetahumano);
router.delete('/:id', controlador_metahumano.eliminarMetaHumanoController);

export const router_metahumano = router;