import redisClient from "../configuracion/redis.js";

export const cache = (keyPrefix) => {
    return async (req, res, next) => {
        try {
            const cacheKey = `${keyPrefix}:${req.originalUrl}`;

            const cachedData = await redisClient.get(cacheKey);

            res.sendJson = res.Json;
            res.Json = (data) => {
                redisClient.setEx(cacheKey, 30, JSON.stringify(data));
                res.sendJson(data);
            };
            next();
        } catch (error) {
            console.error("Error en middleware de cache:", error);
            next();
        }
    }
}