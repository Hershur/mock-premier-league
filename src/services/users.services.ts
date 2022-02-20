import 'reflect-metadata';
import { Service } from "typedi";
import { generateHashedPassword } from "../utils";
import { IUser } from "../interfaces/users.interface";
import { createUserAccountRepo, findUserByEmail } from "../repositories/users.repo";
import { ServiceResponse } from "../types/response.type";

@Service()
export default class UserAccountService {
    
    createUserAccountService = async (userBody: IUser): Promise<ServiceResponse>=> {
        //Check if user exists
        const checkUser = await findUserByEmail(userBody.email); 
        
        console.log("checkUser", checkUser);
        if(checkUser){
            return {success: false, message: "User already exists"};
        }
    
        //Hash Password
        const hashedPassword = generateHashedPassword(userBody.password);
        const user = {...userBody, hashedPassword};
    
        const createUser = await createUserAccountRepo(user);
        return {success: true, data: createUser};
    }
}

