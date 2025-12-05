import conexion from "../configuracion/bd.js";

export const loginUsuario = (Email) => {
    const sql = 'SELECT * FROM usuario WHERE Nombre_Usuario = ?';
    return conexion.promise().query(sql, [Email]);
};