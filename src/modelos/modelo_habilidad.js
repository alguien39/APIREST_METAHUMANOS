import conexion from '../configuracion/bd.js'

export const getHabilidad = () =>{
    const sql = 'Select * From habilidad'
    return conexion.promise().query(sql);
};

export const getHabilidadById = (id) => {
    const sql = 'Select * From habilidad Where Id_Habilidad = ?';
    return conexion.promise().query(sql,[id]);
};

export const createHabilidad = (HabilidadData) =>{
    const checkSql = 'SELECT COUNT(*) as count FROM habilidad WHERE Id_Habilidad = ?';
    
    return conexion.promise().query(checkSql, [HabilidadData.Id_Habilidad])
        .then(([rows]) => {
            if (rows[0].count > 0) {
                throw new Error(`Habilidad con ID ${HabilidadData.Id_Habilidad} ya existe`);
            }
            
            const sql = 'INSERT INTO habilidad (Id_Habilidad, Nombre_Habilidad, Descripcion_Habilidad) VALUES (?, ?, ?)';
            const parametros = [
                HabilidadData.Id_Habilidad,
                HabilidadData.Nombre_Habilidad,
                HabilidadData.Descripcion_Habilidad || null
            ];
            return conexion.promise().query(sql, parametros);
        });
};

export const updateHabilidad = (Id_Habilidad, HabilidadData) =>{
    const sql = 'Update habilidad Set Nombre_Habilidad = ?, Descripcion_Habilidad = ? Where Id_Habilidad = ?'
    const parametros = [
        HabilidadData.Nombre_Habilidad,
        HabilidadData.Descripcion_Habilidad,
        Id_Habilidad
    ];
    return conexion.promise().query(sql, parametros);
};

export const deleteHabilidad = (Id_Habilidad) => {
    const sql = 'DELETE FROM habilidad WHERE Id_Habilidad = ?';
    return conexion.promise().query(sql, [Id_Habilidad]);
}