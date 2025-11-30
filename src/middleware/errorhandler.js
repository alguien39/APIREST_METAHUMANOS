export function errorhandler(err,req,res,next){
    console.error("ERROR:", err);
    const status = err.status || 500;
    res.status(err.status).json({
        succes: false,
        message: err.message || "Error Interno Del Servidor",
        details: err.details || null
    });
}