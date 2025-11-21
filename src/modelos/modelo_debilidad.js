import conexion from '../configuracion/bd.js'

export const getHabilidad = () =>{
    const sql = 'Select * From Debilidad'
    return conexion.promise().query(sql);
};

export const getHabilidadById = (id) => {
    const sql = 'Select * From Debilidad Where Id_Debilidad = ?';
    return conexion.promise().query(sql,[id]);
};

export const createHabilidad = (DebilidadData) =>{
    const sql = 'Insert Into Debilidad Id_Debilidad, Nombre_Debilidad, Descripcion_Debilidad, VALUES (?, ?, ?)'
    const parametros = [
        DebilidadData.Id_Debilidad,
        DebilidadData.Nombre_Debilidad,
        DebilidadData.Descripcion_Debilidad
    ];
    return conexion.promise().query(sql, parametros);
};

export const updateHabilidad = (Id_Debilidad, DebilidadData) =>{
    const sql = 'Update Debilidad Set Nombre_Debilidad = ?, Descripcion_Debilidad = ? Where Id_Debilidad = ?'
    const parametros = [
        DebilidadDataData.Nombre_Debilidad,
        DebilidadData.Descripcion_Debilidad,
        Id_Debilidad
    ];
    return conexion.promise().query(sql, parametros);
};

export const deleteHabilidad = (Id_Debilidad) => {
    const sql = 'Delete From Debilidad Where Id_Debilidad = ?'
    return conexion.promise().query(sql, [Id_Debilidad]);
}