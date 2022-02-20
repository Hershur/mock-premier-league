import bcrypt from "bcrypt";

export const generateHashedPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}