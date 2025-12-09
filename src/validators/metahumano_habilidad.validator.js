import {body, param} from "express-validator";

export const validarCreateMetahumanoHabilidad = [
    body("Id_Metahumano")
    .isLength({min:6,max:6})
    .withMessage("El ID de la debilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID dela debilidad debe ser alfanumérico"),
    body("Id_Habilidad")
    .isLength({min:6,max:6})
    .withMessage("El ID de la hablidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID de la habilidad debe ser alfanumérico"),
];

export const validarDeleteMetahumanoHabilidad = [
    param("id_metahumano")
    .isLength({min:6,max:6})
    .withMessage("El ID de la debilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID dela debilidad debe ser alfanumérico"),
    param("id_habilidad")
    .isLength({min:6,max:6})
    .withMessage("El ID de la hablidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID de la habilidad debe ser alfanumérico"),
];