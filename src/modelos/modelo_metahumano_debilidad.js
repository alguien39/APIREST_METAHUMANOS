import conexion from '../configuracion/bd.js'

export const getMetaHumano_Debilidad = () =>{
    const sql = `Select Metahumano_Debilidad.Id_Metahumano, Metahumano.Alias, Metahumano_Debilidad.Id_Debilidad, Debilidad.Nombre_Debilidad
                    From Metahumano_Debilidad Join Debilidad On (Metahumano_Debilidad.Id_Debilidad = Debilidad.Id_Debilidad) Join Metahumano On (Metahumano.Id_Metahumano = Metahumano_Debilidad.Id_Metahumano);;`
    return conexion.promise().query(sql);
};

export const getMetaHumano_DebilidadById_Metahumano = (Id_Metahumano) =>{
    const sql = `Select Metahumano_Debilidad.Id_Metahumano, Metahumano.Alias, Metahumano_Debilidad.Id_Debilidad, Debilidad.Nombre_Debilidad
                    From Metahumano_Debilidad Join Debilidad On (Metahumano_Debilidad.Id_Debilidad = Debilidad.Id_Debilidad) Join Metahumano On (Metahumano.Id_Metahumano = Metahumano_Debilidad.Id_Metahumano)
                    Where Metahumano_Debilidad.Id_Metahumano = ?
                    order by Metahumano.Alias;`
    return conexion.promise().query(sql, [Id_Metahumano]);
};

export const getMetaHumano_DebilidadById_Debilidad = (Id_Debilidad) =>{
    const sql = `Select Metahumano_Debilidad.Id_Metahumano, Metahumano.Alias, Metahumano_Debilidad.Id_Debilidad, Debilidad.Nombre_Debilidad
                    From Metahumano_Debilidad Join Debilidad On (Metahumano_Debilidad.Id_Debilidad = Debilidad.Id_Debilidad) Join Metahumano On (Metahumano.Id_Metahumano = Metahumano_Debilidad.Id_Metahumano)
                    Where Metahumano_Debilidad.Id_Debilidad = ?
                    order by Metahumano.Alias;`
    return conexion.promise().query(sql, [Id_Debilidad]);
};

export const createMetahumano_Debilidad = (Metahumano_Debilidad_Data) =>{
    const sql = 'Insert Into Metahumano_Debilidad Id_Metahumano, Id_Debilidad Values (?,?);'
    const parametros = [
        Metahumano_Debilidad_Data.Id_Metahumano,
        Metahumano_Debilidad_Data.Id_Debilidad
    ];
    return conexion.promise(),query(sql,parametros);
}; 

export const deleteHabilidad = (Id_Debilidad, Id_Metahumano) => {
    const sql = 'Delete From Metahumano_Debilidad Where Id_Debilidad = ? AND Id_Metahumano = ?'
    const parametros = [
        Id_Debilidad,
        Id_Metahumano
    ];
    return conexion.promise(),query(sql,parametros);
};