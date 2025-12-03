import {body, param} from 'express-validator';

export const validarIdDebilidad = [
    param("id")
    .isLength({min:6,max:6})
    .withMessage("El ID de la debilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID dela debilidad debe ser alfanumérico"),
];

export const validarCrearDebilidad = [
    body("Id_Debilidad")
    .isLength({min:6,max:6})
    .withMessage("El Id de la debilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El Id de la debilidad debe ser alfa-numerico"),
    body("Nombre_Debilidad")
    .notEmpty()
    .withMessage("El nombre de la debilidad es obligatorio")
    .isLength({max:20})
    .withMessage("El nombre de la debilidad debe tener como maxico 20 caracteres")
    .isAlpha()
    .withMessage("El nombre de la debilidad solo debe contener letras"),
    body("Descripcion_Debilidad")
    .notEmpty
    .withMessage("La descripcion es obligatoria")
    .isLength({max:256})
    .withMessage("El numero de caracteres maximo para la descripcion es de 256")
    .isAlphanumeric()
    .withMessage("La descripcion de la debilidad debe ser alfa-numerica"),
];

export const validarUpdateDebilidad = [
    body("Id_Debilidad")
    .isLength({min:6,max:6})
    .withMessage("El Id de la debilidad debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El Id de la debilidad debe ser alfa-numerico"),
    body("Nombre_Debilidad")
    .notEmpty()
    .withMessage("El nombre de la debilidad es obligatorio")
    .isLength({max:20})
    .withMessage("El nombre de la debilidad debe tener como maxico 20 caracteres")
    .isAlpha()
    .withMessage("El nombre de la debilidad solo debe contener letras"),
    body("Descripcion_Debilidad")
    .notEmpty
    .withMessage("La descripcion es obligatoria")
    .isLength({max:256})
    .withMessage("El numero de caracteres maximo para la descripcion es de 256")
    .isAlphanumeric()
    .withMessage("La descripcion de la debilidad debe ser alfa-numerica"),
];