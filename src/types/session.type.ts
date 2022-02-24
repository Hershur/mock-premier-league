import { Session } from "express-session";

export type SessionWithUser = Session & { 
    email: string;
    id: string;
    isAdmin: boolean;
};