import conexion from '../configuracion/bd.js';

export const getMetahumanos = () => {
    const sql = 'SELECT * FROM metahumano';
    return conexion.promise().query(sql);
};

export const getMetahumanoById = (id) => {
    const sql = 'SELECT * FROM metahumano WHERE Id_MetaHumano = ?';
    return conexion.promise().query(sql, [id]);
};

export const createMetahumano = (metahumanoData) => {
    const checkSql = 'SELECT COUNT(*) as count FROM metahumano WHERE Id_MetaHumano = ?';
    
    return conexion.promise().query(checkSql, [metahumanoData.Id_MetaHumano]).then(([rows]) => {
            if (rows[0].count > 0) {
                throw new Error(`Metahumano con ID ${metahumanoData.Id_MetaHumano} ya existe`);
            }
            
            const sql = 'INSERT INTO metahumano (Id_MetaHumano, Nombre_Metahumano, Alias, Tipo, Actividad, Ultimo_Avistamiento) VALUES (?, ?, ?, ?, ?, ?)';
            const parametros = [
                metahumanoData.Id_MetaHumano,
                metahumanoData.Nombre_Metahumano,
                metahumanoData.Alias,
                metahumanoData.Tipo,
                metahumanoData.Actividad,
                metahumanoData.Ultimo_Avistamiento || null
            ];
            return conexion.promise().query(sql, parametros);
        });
};

export const updateMetahumano = (Id_MetaHumano, metahumanoData) => {
    const sql = 'UPDATE metahumano SET Nombre_Metahumano = ?, Alias = ?, Tipo = ?, Actividad = ?, Ultimo_Avistamiento = ? WHERE Id_MetaHumano = ?';
    const parametros = [
        metahumanoData.Nombre_Metahumano,
        metahumanoData.Alias,
        metahumanoData.Tipo,
        metahumanoData.Actividad,
        metahumanoData.Ultimo_Avistamiento,
        Id_MetaHumano
    ];
    return conexion.promise().query(sql, parametros);
}

export const deleteMetahumano = (id) => {
    const checkRelations = `
        SELECT 
            (SELECT COUNT(*) FROM Metahumano_Habilidad WHERE Id_Metahumano = ?) as habilidades,
            (SELECT COUNT(*) FROM Metahumano_Debilidad WHERE Id_Metahumano = ?) as debilidades
    `;
    
    return conexion.promise().query(checkRelations, [id, id])
        .then(([rows]) => {
            if (rows[0].habilidades > 0 || rows[0].debilidades > 0) {
                throw new Error('No se puede eliminar el metahumano porque tiene habilidades o debilidades asociadas');
            }
            
            const sql = 'DELETE FROM metahumano WHERE Id_MetaHumano = ?';
            return conexion.promise().query(sql, [id]);
        });
};