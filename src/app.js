import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {router_metahumano} from './rutas/router_metahumano.js';
import {router_Habilidad} from './rutas/router_habilidad.js';
import {router_debilidad} from './rutas/router_debilidad.js';
import {router_metahumano_debilidad} from './rutas/router_metahumano_debilidad.js';
import {router_metahumano_habilidad} from './rutas/router_metahumano_habilidad.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Manejador de errores
app.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
})

//End Points
app.use('/metahumano', router_metahumano);
app.use('/habilidad', router_Habilidad);
app.use('/metahumano_habilidad', router_metahumano_habilidad);
app.use('/debilidad', router_debilidad);
app.use('/metahumano_debilidad', router_metahumano_debilidad);

export default app;


