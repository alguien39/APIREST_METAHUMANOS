import app from './app.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://${process.env.RAILWAY_PUBLIC_DOMAIN}`);
    console.log(`Documentación disponible en http://${process.env.RAILWAY_PUBLIC_DOMAIN}/api-docs`);
    console.log(`Puerto ${PORT}`);
}).on('error',(err)=>{
    console.log('Error al iniciar el servidor', err.message);
    process.exit(1);
});