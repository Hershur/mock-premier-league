export interface IUser {
    name: string;
    email: string;
    password: string;
    hashedPassword?: string;
    createdOn: string;
};