import 'reflect-metadata';
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { generateHashedPassword } from "../utils";
import { ServiceResponse } from "../types/response.type";
import { IAdmin } from '../interfaces/admin.interface';
import { createAdminAccountRepo, findAdminByEmail, loginAdminRepo } from '../repositories/admin.repo';
import { ILogin } from '../interfaces/login.interface';
import { TOKEN_KEY, TOKEN_EXPIRY } from '../config';

@Service()
export default class AdminAccountService {
    
    createAdminAccountService = async (adminBody: IAdmin): Promise<ServiceResponse>=> {
        //Check if admin exists
        const checkAdmin = await findAdminByEmail(adminBody.email); 
    
        if(checkAdmin){
            return {success: false, message: "Admin already exists"};
        }
    
        //Hash Password
        const hashedPassword = generateHashedPassword(adminBody.password);
        const admin = {...adminBody, hashedPassword};
    
        const createAdmin = await createAdminAccountRepo(admin);
        return {success: true, data: createAdmin};
    }

    loginAdminService = async (loginBody: ILogin): Promise<ServiceResponse>=> {
        const adminLogin = await loginAdminRepo(loginBody);
        const checkPassword =  bcrypt.compareSync(loginBody.password, adminLogin.password);

        if(!checkPassword) return {success: false, message: "Incorrect username or password"};

        
        const token = jwt.sign(
            { user_id: adminLogin._id, email: adminLogin.email, isAdmin: true},
            TOKEN_KEY,
            {
                expiresIn: 60*TOKEN_EXPIRY,
            }
        );
    
        const retrievedLogin = {
            _id: adminLogin._id,
            email: adminLogin.email,
            name: adminLogin.name,
            created: adminLogin.createdOn,
            token: token
        };
        
        return {success: true, data: retrievedLogin};
    }

    // checkAdminService = async (adminLogin: ILogin)=> {
    //     const checkAdmin = await this.loginAdminService(adminLogin);
    //     return checkAdmin.success;
    // }
}



