import { IAdmin } from "../interfaces/admin.interface";
import adminModel from "../models/admin.model";
import { ILogin } from "../interfaces/login.interface";

export const createAdminAccountRepo = async (adminBody: IAdmin)=> {

    const admin = new adminModel({
        name: adminBody.name,
        email: adminBody.email,
        password: adminBody.hashedPassword,
        createdOn: new Date().toLocaleString()
    });
    
    const createAdmin = await admin.save();
  
    const { name, email, createdOn} = createAdmin;
    return { name, email, createdOn};
};


export const loginAdminRepo = async (loginBody: ILogin)=> {
    const checkAdminExists = await adminModel.findOne({ email: loginBody.email});
    return checkAdminExists ? checkAdminExists : null;
};


export const findAdminByEmail = async (email: string)=> {
    const findAdmin = await adminModel.findOne({ email: email }).exec();
    return findAdmin;
}