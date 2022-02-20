import 'reflect-metadata';
import {Request, Response} from 'express';
import UserAccountService from '../services/users.services';
import Container, { Service, Inject } from 'typedi';
import { IUser } from '../interfaces/users.interface';

@Service()
class UserController {
    @Inject() private readonly _userService: UserAccountService;

    async createUser(req: Request, res: Response){
        try {
            const userDTO = req.body as unknown as IUser;
            const createUser = await this._userService.createUserAccountService(userDTO);
            
            res.statusCode = 200;

            return res.json(createUser);
        } catch (error) {
            res.statusCode = 500;
            
            return res.json({success: false, message: error.message});
        }
    }
}

const _userController = Container.get<UserController>(UserController);

export default _userController