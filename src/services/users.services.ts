import 'reflect-metadata';
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { generateHashedPassword } from "../utils";
import { IUser } from "../interfaces/users.interface";
import { createUserAccountRepo, findUserByEmail, loginUserRepo } from "../repositories/users.repo";
import { ServiceResponse } from "../types/response.type";
import { ILogin } from '../interfaces/login.interface';
import { TOKEN_EXPIRY, TOKEN_KEY } from '../config';

@Service()
export default class UserAccountService {
    
    createUserAccountService = async (userBody: IUser): Promise<ServiceResponse>=> {
        //Check if user exists
        const checkUser = await findUserByEmail(userBody.email); 
        
        if(checkUser){
            return {success: false, message: "User already exists"};
        }
    
        //Hash Password
        const hashedPassword = generateHashedPassword(userBody.password);
        const user = {...userBody, hashedPassword};
    
        const createUser = await createUserAccountRepo(user);
        return {success: true, data: createUser};
    }


    loginUserService = async (loginBody: ILogin): Promise<ServiceResponse>=> {
        const userLogin = await loginUserRepo(loginBody);
        const checkPassword =  bcrypt.compareSync(loginBody.password, userLogin.password);

        if(!checkPassword) return {success: false, message: "Incorrect username or password"};

        
        const token = jwt.sign(
            { user_id: userLogin._id, email: userLogin.email},
            TOKEN_KEY,
            {
                expiresIn: 60*TOKEN_EXPIRY,
            }
        );
    
        const retrievedLogin = {
            _id: userLogin._id,
            email: userLogin.email,
            name: userLogin.name,
            created: userLogin.createdOn,
            token: token
        };
        
        return {success: true, data: retrievedLogin};
    }
}

