import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {router_metahumano} from './rutas/router_metahumano.js';

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

export default app;


