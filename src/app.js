import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {router_metahumano} from './rutas/router_metahumano';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/metahumano', router_metahumano);

export default app;


