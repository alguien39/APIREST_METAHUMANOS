import redisClient from "../configuracion/redis.js";

export const cache = (keyPrefix) => {
    return async (req, res, next) => {
        try {
            const cacheKey = `${keyPrefix}:${req.originalUrl}`;

            const cachedData = await redisClient.get(cacheKey);

            if (cachedData) {
                res.set("X-Cache", "HIT");
                return res.status(200).json(JSON.parse(cachedData));
            }

            res.set("X-Cache", "MISS");

            const originalJson = res.json.bind(res);
            res.json = (data) => {
                redisClient.setEx(cacheKey, 60, JSON.stringify(data));
                return originalJson(data);
            };

            next();
        } catch (error) {
            console.error("Error en middleware de cache:", error);
            next();
        }
    };
};