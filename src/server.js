import app from './app.js';

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}).on('error',(err)=>{
    console.log('Error al iniciar el servidor', err.message);
    process.exit(1);
});