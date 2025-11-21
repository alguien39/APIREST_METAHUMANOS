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
    const sql = 'INSERT INTO metahumano Id_MetaHumano, Nombre_Metahumano, Alias, Tipo, Actividad, Ultimo_Avistamiento VALUES (?, ?, ?, ?, ?, ?)';
    const parametros = [
        metahumanoData.Id_MetaHumano,
        metahumanoData.Nombre_Metahumano,
        metahumanoData.Alias,
        metahumanoData.Tipo,
        metahumanoData.Actividad,
        metahumanoData.Ultimo_Avistamiento
    ];
    return conexion.promise().query(sql, parametros);
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
    const sql = 'DELETE FROM metahumano WHERE Id_MetaHumano = ?';
    return conexion.promise().query(sql, [id]);
};