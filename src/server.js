import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    const environment = process.env.NODE_ENV || 'development';
    
    console.log('='.repeat(60));
    console.log('🚀 API DE METAHUMANOS - BACKEND');
    console.log('='.repeat(60));
    
    if (process.env.RAILWAY_PUBLIC_DOMAIN) {
        console.log(`URL PÚBLICA: https://${process.env.RAILWAY_PUBLIC_DOMAIN}`);
        console.log(`Documentación: https://${process.env.RAILWAY_PUBLIC_DOMAIN}/api-docs`);
    } else {
        console.log(`Ambiente: ${environment}`);
        console.log(`Servidor escuchando en: http://localhost:${PORT}`);
        console.log(`Documentación: http://localhost:${PORT}/api-docs`);
    }
    
    console.log(`Puerto: ${PORT}`);
    console.log('='.repeat(60));
    
    if (environment === 'development') {
        console.log('\n🔍 Variables de entorno disponibles:');
        const envVars = Object.keys(process.env)
            .filter(key => key.includes('RAILWAY') || key.includes('PORT') || key.includes('NODE'))
            .sort();
        
        envVars.forEach(key => {
            if (key !== 'JWT_SECRET' && key !== 'DATABASE_URL') {
                console.log(`  ${key}: ${process.env[key]}`);
            }
        });
    }
    
}).on('error', (err) => {
    console.error('ERROR CRÍTICO:', err.message);
    console.error('Detalles:', err);
    process.exit(1);
});