const Redis = require("ioredis")
const redisInstance = new Redis(6379, "127.0.0.1")

class Cache {

    static setCache = async(key, value, needStringify = true) => {
        await redisInstance.set(key,needStringify ? JSON.stringify(value) : value);
        return await this.getCache(key);
    }

    static getCache = async(key, needParse = true) => {
        return needParse ? JSON.parse(await redisInstance.get(key)) : await redisInstance.get(key)
    }

    static delCache = async(key) => {
        await redisInstance.del(key);
    }

}

module.exports = Cache