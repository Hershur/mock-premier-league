import userModel from "../models/users.model";
import { IUser } from "../interfaces/users.interface";
import { ILogin } from '../interfaces/login.interface';

export const createUserAccountRepo = async (userBody: IUser)=> {

    const user = new userModel({
        name: userBody.name,
        email: userBody.email,
        password: userBody.hashedPassword,
        createdOn: new Date().toLocaleString()
    });
    
    const createUser = await user.save();
  
    const { name, email, createdOn} = createUser;
    return { name, email, createdOn};
};

export const loginUserRepo = async (loginBody: ILogin)=> {
    
    const checkUserExists = await userModel.findOne({ email: loginBody.email});

    return checkUserExists ? checkUserExists : null;

};


export const findUserByEmail = async (email: string)=> {
    const findUser = await userModel.findOne({ email: email }).exec();
    return findUser;
}