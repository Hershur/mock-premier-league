import bcrypt from "bcrypt";
import { NODE_ENV, COOKIE_SECRET, TOKEN_EXPIRY } from './config';


export const generateHashedPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

export const adminRoutes = ['create', 'edit', 'remove'];

export const cookieOptions = {
    maxAge: 1000 * 60 * TOKEN_EXPIRY, 
    sameSite: true, 
    httpOnly: true,
    secure: NODE_ENV === "production",
    secret: COOKIE_SECRET,
    signed: true
}