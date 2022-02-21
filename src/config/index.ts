import dotenv from 'dotenv';

dotenv.config();

const TOKEN_KEY = process.env.TOKEN_KEY;
const TOKEN_EXPIRY = Number(process.env.TOKEN_EXPIRY);
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


export {
    TOKEN_KEY,
    TOKEN_EXPIRY,
    PORT,
    MONGO_URI
}