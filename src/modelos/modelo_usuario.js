import conexion from '../configuracion/bd.js';

export const loginUsuario = (Email) => {
    const sql = 'SELECT * FROM Usuario WHERE Email = ?';
    return conexion.promise().query(sql, [Email]);
};

export const crearUsuario = (usuarioData) => {
    const checkSql = 'SELECT COUNT(*) as count FROM Usuario WHERE Email = ?';
    
    return conexion.promise().query(checkSql, [usuarioData.Nombre_Usuario, usuarioData.Email])
        .then(([rows]) => {
            if (rows[0].count > 0) {
                throw new Error('Una Cuenta con este Email ya existe');
            }
            
            let Rol = "Usuario"

            const sql = 'INSERT INTO Usuario (Id_Usuario, Email, Password, Rol) VALUES (?, ?, ?, ?)';
            const parametros = [
                usuarioData.Id_Usuario,
                usuarioData.Email,
                usuarioData.Password,
                Rol || "Usuario"
            ];
            return conexion.promise().query(sql, parametros);
        });
};