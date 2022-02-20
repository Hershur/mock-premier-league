import mongoose from 'mongoose';
import { IUser } from '../../interfaces/users.interface';


export const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    }
});