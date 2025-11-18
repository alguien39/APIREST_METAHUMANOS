import { Router } from "express";

import { getMetahumanos, getMetahumanoById, createMetahumano, updateMetahumano, deleteMetahumano } from "../controllers/controller_metahumano.js";
const router = Router();

router.get('/', getMetahumanos);
router.get('/:id', getMetahumanoById);
router.post('/', createMetahumano);
router.put('/:id', updateMetahumano);
router.delete('/:id', deleteMetahumano);

export const router_metahumano = router;