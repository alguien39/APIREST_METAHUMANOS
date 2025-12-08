import {body} from 'express-validator';

export const validarLogin = [
    body("Email")
    .notEmpty()
    .withMessage("El Email es Obligatorio"),
    body("Password")
    .notEmpty()
    .withMessage("La contrasena es Obligatoria")
]

export const validarRegistro = [
    body("Id_Usuario")
    .notEmpty()
    .withMessage("El Id del nuevo usuario es obligatorio")
    .isLength({min:6,max:6})
    .withMessage("El largo del Id del nuevo usuario debe ser de 6 caracteres")
    .isAlphanumeric()
    .withMessage("El Id del nuevo usuario debe ser alfa-numerico"),
    body("Email")
    .notEmpty()
    .withMessage("El Email es Obligatorio"),
    body("Password")
    .notEmpty()
    .withMessage("La contrasena es Obligatoria"),
];