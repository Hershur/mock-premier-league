import 'reflect-metadata';
import express from 'express';
import UserAccountService from '../services/users.services';
import Container, { Service, Inject } from 'typedi';
import { IUser } from '../interfaces/users.interface';
import { ILogin } from '../interfaces/login.interface';

@Service()
class UserController {
    @Inject() private readonly _userService: UserAccountService;

    async createUser(req: express.Request, res: express.Response){
        try {
            const userDTO = req.body as unknown as IUser;
            const createUser = await this._userService.createUserAccountService(userDTO);
            

            return res.status(201).json(createUser);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }

    async loginUser(req: express.Request, res: express.Response){
        try {
            const loginDTO = req.body as unknown as ILogin;
            const loginUser = await this._userService.loginUserService(loginDTO);
            

            return res.status(200).json(loginUser);
        } catch (error) {
            return res.status(500).json({success: false, message: "Incorrect username or password"});

        }
    }

}

const _userController = Container.get<UserController>(UserController);

export default _userController;