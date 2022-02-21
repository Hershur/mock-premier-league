import 'reflect-metadata';
import express from 'express';
import Container, { Service, Inject } from 'typedi';
import { IAdmin } from '../interfaces/admin.interface';
import AdminAccountService from '../services/admin.services';
import { ILogin } from '../interfaces/login.interface';

@Service()
class AdminController {
    @Inject() private readonly _adminService: AdminAccountService;

    async createAdmin(req: express.Request, res: express.Response){
        try {
            const userDTO = req.body as unknown as IAdmin;
            const createUser = await this._adminService.createAdminAccountService(userDTO);

            return res.status(201).json(createUser);
        } catch (error) {
            
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }

    async loginAdmin(req: express.Request, res: express.Response){
        try {
            const loginDTO = req.body as unknown as ILogin;
            const loginAdmin = await this._adminService.loginAdminService(loginDTO);
            
            return res.status(200).json(loginAdmin);
        } catch (error) {
            return res.status(500).json({success: false, message: "Incorrect username or password"});

        }
    }

    // async checkAdmin(req: express.Request, res: express.Response){
    //     try {
    //         const loginDTO = req.body as unknown as ILogin;
    //         const loginAdmin = await this._adminService.checkAdminService(loginDTO);
    //     } catch (error) {
            
    //     }
    // }
}

const _adminController = Container.get<AdminController>(AdminController);

export default _adminController;