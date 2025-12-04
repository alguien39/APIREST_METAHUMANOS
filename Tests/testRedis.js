import redisClient from "../src/configuracion/redis.js";

await redisClient.set("prueba", "Hola Redis Cloud!");
const value = await redisClient.get("prueba");

console.log(value);