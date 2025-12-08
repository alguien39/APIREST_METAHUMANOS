import conexion from "../configuracion/bd.js";

export const loginUsuario = (Email) => {
    const sql = 'SELECT * FROM Usuario WHERE Email = ?';
    return conexion.promise().query(sql, [Email]);
};