import {body, param} from 'express-validator';

export const validarIdHabilidad = [
    param("id")
    .isLength({min:6,max:6})
    .withMessage("El ID de la hablidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID de la habilidad debe ser alfanumérico"),
];

export const validarCrearHabilidad = [
    body("Id_Habilidad")
    .isLength({min:6,max:6})
    .withMessage("El Id de la habilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El Id de la habilidad debe ser alfa-numerico"),
    body("Nombre_Habilidad")
    .notEmpty()
    .withMessage("El nombre de la habilidad es obligatorio")
    .isLength({max:20})
    .withMessage("El nombre de la habilidad debe tener como maxico 20 caracteres"),
    body("Descripcion_habilidad")
    .notEmpty()
    .withMessage("La descripcion es obligatoria")
    .isLength({max:256})
    .withMessage("El numero de caracteres maximo para la descripcion es de 256"),
];

export const validarUpdateHabilidad = [
    param("Id_Habilidad")
    .isLength({min:6,max:6})
    .withMessage("El Id de la habilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El Id de la habilidad debe ser alfa-numerico"),
    body("Nombre_habilidad")
    .notEmpty()
    .withMessage("El nombre de la habilidad es obligatorio")
    .isLength({max:20})
    .withMessage("El nombre de la habilidad debe tener como maxico 20 caracteres"),
    body("Descripcion_habilidad")
    .notEmpty()
    .withMessage("La descripcion es obligatoria")
    .isLength({max:256})
    .withMessage("El numero de caracteres maximo para la descripcion es de 256")
];