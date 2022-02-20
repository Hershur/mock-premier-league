import userModel from "../models/users.model";
import { IUser } from "../interfaces/users.interface";

export const createUserAccountRepo = async (userBody: IUser)=> {

    const user = new userModel({
        name: userBody.name,
        email: userBody.email,
        password: userBody.hashedPassword,
        createdOn: new Date().toLocaleString()
    });
    
    const createUser = await user.save();
  
    return createUser;
};


export const findUserByEmail = async (email: string)=> {
    const findUser = await userModel.findOne({ email: email }).exec();
    return findUser;
}