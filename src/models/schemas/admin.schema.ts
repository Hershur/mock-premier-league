import mongoose from "mongoose";
import { IAdmin } from "../../interfaces/admin.interface";

export const adminSchema = new mongoose.Schema<IAdmin>({
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