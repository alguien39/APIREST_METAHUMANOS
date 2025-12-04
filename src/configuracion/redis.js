import { createClient } from "redis";
import dotenv from 'dotenv';

dotenv.config()

const redisClient = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        tls: {}
    },
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASSWORD
});

redisClient.on("error", (err) => console.log("Error en redis client:", err));
redisClient.on("connect", () => console.log("Conectado a Redis"));

await redisClient.connect();

export default redisClient;