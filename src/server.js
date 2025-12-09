import app from './app.js';

const HOST  = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
    console.log(`Documentación disponible en http://${HOST}:${PORT}/api-docs`);
}).on('error',(err)=>{
    console.log('Error al iniciar el servidor', err.message);
    process.exit(1);
});