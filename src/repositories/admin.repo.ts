import adminModel from "../models/admin.model";
import { IAdmin } from "../interfaces/admin.interface";

export const createAdminAccountRepo = async (adminBody: IAdmin)=> {

    const admin = new adminModel({
        name: adminBody.name,
        email: adminBody.email,
        password: adminBody.hashedPassword,
        createdOn: new Date().toLocaleString()
    });
    
    const createAdmin = await admin.save();
  
    return createAdmin;
};


export const findAdminByEmail = async (email: string)=> {
    const findAdmin = await adminModel.findOne({ email: email }).exec();
    return findAdmin;
}