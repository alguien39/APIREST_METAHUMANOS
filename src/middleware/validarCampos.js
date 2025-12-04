import { validationResult } from "express-validator";
import { AppError } from "../utils/AppError.js";

export const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new AppError("Error de validacion", 400, errors.array()));
    }
    next();
};