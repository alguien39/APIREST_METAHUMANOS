import conexion from '../configuracion/bd.js'

export const getDebilidad = () =>{
    const sql = 'Select * From debilidad'
    return conexion.promise().query(sql);
};

export const getDebilidadById = (id) => {
    const sql = 'Select * From debilidad Where Id_Debilidad = ?';
    return conexion.promise().query(sql,[id]);
};

export const createDebilidad = (DebilidadData) =>{
    const checkSql = 'SELECT COUNT(*) as count FROM debilidad WHERE Id_Debilidad = ?';
    
    return conexion.promise().query(checkSql, [DebilidadData.Id_Debilidad])
        .then(([rows]) => {
            if (rows[0].count > 0) {
                throw new Error(`Debilidad con ID ${DebilidadData.Id_Debilidad} ya existe`);
            }
            
            const sql = 'INSERT INTO debilidad (Id_Debilidad, Nombre_Debilidad, Descripcion_Debilidad) VALUES (?, ?, ?)';
            const parametros = [
                DebilidadData.Id_Debilidad,
                DebilidadData.Nombre_Debilidad,
                DebilidadData.Descripcion_Debilidad || null
            ];
            return conexion.promise().query(sql, parametros);
        });
};

export const updateDebilidad = (Id_Debilidad, DebilidadData) =>{
    const sql = 'Update debilidad Set Nombre_Debilidad = ?, Descripcion_Debilidad = ? Where Id_Debilidad = ?'
    const parametros = [
        DebilidadData.Nombre_Debilidad,
        DebilidadData.Descripcion_Debilidad,
        Id_Debilidad
    ];
    return conexion.promise().query(sql, parametros);
};

export const deleteDebilidad = (Id_Debilidad) => {
    const checkRelations = `
        SELECT COUNT(*) as count 
        FROM Metahumano_Debilidad 
        WHERE Id_Debilidad = ?
    `;
    
    return conexion.promise().query(checkRelations, [Id_Debilidad])
        .then(([rows]) => {
            if (rows[0].count > 0) {
                throw new Error('No se puede eliminar la debilidad porque tiene metahumanos asociados');
            }
            
            const sql = 'DELETE FROM Debilidad WHERE Id_Debilidad = ?';
            return conexion.promise().query(sql, [Id_Debilidad]);
        });
}