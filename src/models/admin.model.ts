import mongoose from "mongoose";
import { IAdmin } from "../interfaces/admin.interface";
import { adminSchema } from "./schemas/admin.schema";

const adminModel = mongoose.model<IAdmin & mongoose.Document>('Admin', adminSchema);

export default adminModel;