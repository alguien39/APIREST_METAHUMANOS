import {body} from 'express-validator';

export const validarCrearMetahumano_Debilidad = [
    body("Id_Metahumano")
    .isLength({min:6,max:6})
    .withMessage("El ID del metahumano debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID del metahumano debe ser alfanumérico"),
    body("Id_Debilidad")
    .isLength({min:6,max:6})
    .withMessage("El ID de la debilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID dela debilidad debe ser alfanumérico"),
];