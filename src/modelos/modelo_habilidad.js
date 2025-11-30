import conexion from '../configuracion/bd.js'

export const getHabilidad = () =>{
    const sql = 'Select * From Habilidad'
    return conexion.promise().query(sql);
};

export const getHabilidadById = (id) => {
    const sql = 'Select * From Habilidad Where Id_Habilidad = ?';
    return conexion.promise().query(sql,[id]);
};

export const createHabilidad = (HabilidadData) =>{
    const sql = 'Insert Into Habilidad (Id_Habilidad, Nombre_Habilidad, Descripcion_Habilidad) VALUES (?, ?, ?)'
    const parametros = [
        HabilidadData.Id_Habilidad,
        HabilidadData.Nombre_Habilidad,
        HabilidadData.Descripcion_Habilidad
    ];
    return conexion.promise().query(sql, parametros);
};

export const updateHabilidad = (Id_Habilidad, HabilidadData) =>{
    const sql = 'Update Habilidad Set Nombre_Habilidad = ?, Descripcion_Habilidad = ? Where Id_Habilidad = ?'
    const parametros = [
        HabilidadData.Nombre_Habilidad,
        HabilidadData.Descripcion_Habilidad,
        Id_Habilidad
    ];
    return conexion.promise().query(sql, parametros);
};

export const deleteHabilidad = (Id_Habilidad) => {
    const sql = 'Delete From Habilidad Where Id_Habilidad = ?'
    return conexion.promise().query(sql, [Id_Habilidad]);
}