import mongoose from "mongoose";
import { IUser } from "../interfaces/users.interface";
import { userSchema } from "./schemas/users.schema";

const userModel = mongoose.model<IUser & mongoose.Document>('Users', userSchema);

export default userModel;