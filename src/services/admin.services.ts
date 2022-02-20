import { generateHashedPassword } from "../utils";
import { IAdmin } from "../interfaces/admin.interface";
import { createAdminAccountRepo, findAdminByEmail } from "../repositories/admin.repo";

export const createAdminAccountService = async (adminBody: IAdmin)=> {
    //Check if admin exists
    const checkAdmin = findAdminByEmail(adminBody.email); 

    if(checkAdmin){
        return {success: false, message: "Admin already exists"};
    }

    //Hash Password
    const hashedPassword = generateHashedPassword(adminBody.password);
    const admin = {...adminBody, hashedPassword};

    const createAdmin = await createAdminAccountRepo(admin);
    return {success: true, data: createAdmin};
}

