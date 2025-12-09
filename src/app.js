import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';
import { specs } from './utils/swagger.js';
import {router_metahumano} from './rutas/router_metahumano.js';
import {router_Habilidad} from './rutas/router_habilidad.js';
import {router_debilidad} from './rutas/router_debilidad.js';
import {router_metahumano_debilidad} from './rutas/router_metahumano_debilidad.js';
import {router_metahumano_habilidad} from './rutas/router_metahumano_habilidad.js';
import {router_auth} from './rutas/router_auth.js'
import { errorhandler } from './middleware/errorhandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Configuración para producción
const isProduction = process.env.NODE_ENV === 'production';

// Configuración de CORS
const corsOptions = {
  origin: isProduction 
    ? process.env.CORS_ORIGIN || '*' 
    : '*',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Seguridad con Helmet
app.use(helmet({
  contentSecurityPolicy: isProduction,
  crossOriginEmbedderPolicy: isProduction,
}));

// Documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use("/docs", express.static(path.join(__dirname, "../Docs")));

app.get("/docs/redoc", (req, res) => {
  res.sendFile(path.join(__dirname, "../Docs/redoc.html"));
});

// End Points
app.use('/user', router_auth);
app.use('/metahumano', router_metahumano);
app.use('/habilidad', router_Habilidad);
app.use('/metahumano_habilidad', router_metahumano_habilidad);
app.use('/debilidad', router_debilidad);
app.use('/metahumano_debilidad', router_metahumano_debilidad);

// End point para rutas inexistentes
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        path: req.originalUrl,
        method: req.method
    });
});

// Manejador de errores
app.use(errorhandler);

export default app;