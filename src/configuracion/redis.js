import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on("error", (err) => console.log("Error en redis client:", err));
redisClient.on("connect", () => console.log("Conectado a Redis"));

await redisClient.connect();

export default redisClient;