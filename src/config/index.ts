import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const TOKEN_KEY = process.env.TOKEN_KEY;
const TOKEN_EXPIRY = Number(process.env.TOKEN_EXPIRY);
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_SECRET = process.env.REDIS_SECRET;
const REDIS_HOST_PORT = Number(process.env.REDIS_HOST_PORT);
const SESSION_NAME = process.env.SESSION_NAME;


export {
    NODE_ENV,
    TOKEN_KEY,
    TOKEN_EXPIRY,
    PORT,
    MONGO_URI,
    REDIS_PASSWORD,
    REDIS_HOST,
    REDIS_HOST_PORT,
    REDIS_SECRET,
    SESSION_NAME
}