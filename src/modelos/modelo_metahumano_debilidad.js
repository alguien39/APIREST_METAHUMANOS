import conexion from '../configuracion/bd.js'

export const getMetaHumano_Debilidad = () =>{
    const sql = `Select metahumano_debilidad.Id_Metahumano, metahumano.Alias, metahumano_debilidad.Id_Debilidad, debilidad.Nombre_Debilidad
                    From metahumano_debilidad Join debilidad On (metahumano_debilidad.Id_Debilidad = debilidad.Id_Debilidad) Join metahumano On (metahumano.Id_Metahumano = metahumano_debilidad.Id_Metahumano)`
    return conexion.promise().query(sql);
};

export const getMetaHumano_DebilidadById_Metahumano = (Id_Metahumano) =>{
    const sql = `Select metahumano_debilidad.Id_Metahumano, metahumano.Alias, metahumano_debilidad.Id_Debilidad, debilidad.Nombre_Debilidad
                    From metahumano_debilidad Join debilidad On (metahumano_debilidad.Id_Debilidad = Debilidad.Id_Debilidad) Join metahumano On (metahumano.Id_Metahumano = metahumano_debilidad.Id_Metahumano)
                    Where metahumano_debilidad.Id_Metahumano = ?
                    order by metahumano.Alias`
    return conexion.promise().query(sql, [Id_Metahumano]);
};

export const getMetaHumano_DebilidadById_Debilidad = (Id_Debilidad) =>{
    const sql = `Select metahumano_debilidad.Id_Metahumano, metahumano.Alias, metahumano_debilidad.Id_Debilidad, debilidad.Nombre_Debilidad
                    From metahumano_debilidad Join debilidad On (metahumano_debilidad.Id_Debilidad = debilidad.Id_Debilidad) Join metahumano On (metahumano.Id_Metahumano = metahumano_debilidad.Id_Metahumano)
                    Where metahumano_debilidad.Id_Debilidad = ?
                    order by metahumano.Alias`
    return conexion.promise().query(sql, [Id_Debilidad]);
};

export const createMetahumano_Debilidad = (Metahumano_Debilidad_Data) =>{
    const sql = 'Insert Into metahumano_debilidad (Id_Metahumano, Id_Debilidad) Values (?,?)'
    const parametros = [
        Metahumano_Debilidad_Data.Id_Metahumano,
        Metahumano_Debilidad_Data.Id_Debilidad
    ];
    return conexion.promise().query(sql,parametros);
}; 

export const deleteMetahumano_Debilidad = (Id_Debilidad, Id_Metahumano) => {
    const sql = 'Delete From metahumano_debilidad Where Id_Debilidad = ? AND Id_Metahumano = ?'
    const parametros = [
        Id_Debilidad,
        Id_Metahumano
    ];
    return conexion.promise().query(sql,parametros);
};