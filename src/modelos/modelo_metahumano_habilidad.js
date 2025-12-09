import conexion from '../configuracion/bd.js'

export const getMetaHumano_Habilidad = () =>{
    const sql = `Select metahumano_habilidad.Id_Metahumano, metahumano.Alias, metahumano_habilidad.Id_Habilidad, habilidad.Nombre_Habilidad 
                    From metahumano_habilidad Join habilidad On (metahumano_habilidad.Id_Habilidad = habilidad.Id_Habilidad) Join metahumano On (metahumano_habilidad.Id_Metahumano = metahumano.Id_Metahumano)
                    Order By metahumano.Alias`
    return conexion.promise().query(sql);
};

export const getMetaHumano_HabilidadById_Metahumano = (Id_Metahumano) =>{
    const sql = `Select metahumano_habilidad.Id_Metahumano, metahumano.Alias, metahumano_habilidad.Id_Habilidad, habilidad.Nombre_Habilidad 
                    From metahumano_habilidad Join habilidad On (metahumano_habilidad.Id_Habilidad = habilidad.Id_Habilidad) Join metahumano On (metahumano_habilidad.Id_Metahumano = metahumano.Id_Metahumano)
                    Where metahumano_habilidad.Id_Metahumano = ?
                    Order By metahumano.Alias`
    return conexion.promise().query(sql, [Id_Metahumano]);
};

export const getMetaHumano_HabilidadById_Habilidad = (Id_Habilidad) =>{
    const sql = `Select metahumano_habilidad.Id_Metahumano, metahumano.Alias, metahumano_habilidad.Id_Habilidad, habilidad.Nombre_Habilidad 
                    From metahumano_habilidad Join habilidad On (metahumano_habilidad.Id_Habilidad = habilidad.Id_Habilidad) Join metahumano On (metahumano_habilidad.Id_Metahumano = metahumano.Id_Metahumano)
                    Where metahumano_habilidad.Id_Habilidad = ?
                    Order By metahumano.Alias`
    return conexion.promise().query(sql, [Id_Habilidad]);
};

export const createMetahumano_Habilidad = (Metahumano_Habilidad_Data) =>{
    const sql = 'Insert Into metahumano_habilidad (Id_Metahumano, Id_Habilidad) Values (?,?)'
    const parametros = [
        Metahumano_Habilidad_Data.Id_Metahumano,
        Metahumano_Habilidad_Data.Id_Habilidad
    ];
    return conexion.promise().query(sql,parametros);
};

export const deleteMetahumano_Habilidad = (Id_Habilidad, Id_Metahumano) => {
    const sql = 'Delete From metahumano_habilidad Where Id_Metahumano = ? AND Id_Habilidad = ?'
    const parametros = [
        Id_Metahumano,
        Id_Habilidad
    ];
    return conexion.promise().query(sql,parametros);
};