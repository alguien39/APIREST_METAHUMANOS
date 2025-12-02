import {body, param}  from 'express-validator';

export const validarIdMetahumano = [
    param("id")
    .isLength({min:6,max:6})
    .withMessage("El ID del metahumano debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID del metahumano debe ser alfanumérico"),
];

export const validarCrearMetahumano = [
    body("Nombre_Metahumano")
    .optional()
    .isLength({max:20})
    .withMessage("El nombre del metahumano debe tener entre 3 y 20 caracteres")
    .Letters()
    .withMessage("El nombre del metahumano solo debe contener letras"),
    body("Alias")
    .notEmpty()
    .withMessage("El alias del metahumano es obligatorio")
    .isLength({max:20})
    .whithMessage("El alias del metahumano debe tener como maximo 20 caracteres"),
    body("Tipo")
    .isIn(['Heroe','Villano','Antiheroe'])
    .whithMessage("El tipo de metahumano debe ser 'Heroe', 'Villano' o 'Antiheroe'"),
    body("Actividad")
    .optional()
    .isIn(['Activo','Inactivo','Fallecido'])
    .whithMessage("La actividad del metahumano debe ser 'Activo', 'Inactivo' o 'Fallecido'"),
    body('Ultimo_Avistamiento')
    .optional()
    .isDate()
    .withMessage("La fecha de ultimo avistamiento debe ser una fecha valida"),
    body('Id_MetaHumano')
    .isLength({min:6,max:6})
    .withMessage("El ID del metahumano debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID del metahumano debe ser alfanumérico"),
];

export const updateMetahumano = [
    body("Nombre_Metahumano")
    .optional()
    .isLength({max:20})
    .withMessage("El nombre del metahumano debe tener entre 3 y 20 caracteres")
    .Letters()
    .withMessage("El nombre del metahumano solo debe contener letras"),
    body("Alias")
    .notEmpty()
    .withMessage("El alias del metahumano es obligatorio")
    .isLength({max:20})
    .whithMessage("El alias del metahumano debe tener como maximo 20 caracteres"),
    body("Tipo")
    .isIn(['Heroe','Villano','Antiheroe'])
    .whithMessage("El tipo de metahumano debe ser 'Heroe', 'Villano' o 'Antiheroe'"),
    body("Actividad")
    .optional()
    .isIn(['Activo','Inactivo','Fallecido'])
    .whithMessage("La actividad del metahumano debe ser 'Activo', 'Inactivo' o 'Fallecido'"),
    body('Ultimo_Avistamiento')
    .optional()
    .isDate()
    .withMessage("La fecha de ultimo avistamiento debe ser una fecha valida"),
    body('Id_MetaHumano')
    .isLength({min:6,max:6})
    .withMessage("El ID del metahumano debe tener exactamente 6 caracteres")
    .isAlphanumeric()
    .withMessage("El ID del metahumano debe ser alfanumérico"),
];