import conexion from "../configuracion/bd";

export const loginUsuario = (Email,Password) => {
    const sql = 'SELECT * FROM usuario WHERE Nombre_Usuario = ? AND Contrasena = ?';
    return conexion.promise().query(sql, [Email,Password]);
};