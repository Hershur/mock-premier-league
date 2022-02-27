import app from '../app';
import request from 'supertest';
import UserAccountService from '../services/users.services';
import { close } from '../database/redisConnection';



describe('test User routes', () => {
    const userCreated = {
        name: "Assurance Femi",
        email: "user2@gmail.com",
        password: "Tester1234!",
        confirmPassword: "Tester1234!"
    };

    const user = {
        name: "Assurance Femi",
        email: "user2@gmail.com",
    }
    
    describe('test create user route', () => {
        
        const invalidUser = {
            email: "user2@gmail.com",
            password: "Tester1234!",
            confirmPassword: "Tester1234!"
        };
    
        it('should return an object with success and data details of user if successfully created', async () => {
            const mockCreateUser =  jest.fn((): any=> ({success: true, data: userCreated}));
    
            jest
            .spyOn(UserAccountService.prototype, "createUserAccountService") 
            .mockImplementation(async ()=>  mockCreateUser());
    
            const res = await request(app).post('/api/users/create').send(userCreated);
    
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(userCreated.name);
    
        });
    
        it('should return an invalid parameters error if the required fields are missing', async () => {
            const mockCreateUser =  jest.fn((): any=> ({success: true, data: userCreated}));
    
            jest
            .spyOn(UserAccountService.prototype, "createUserAccountService") 
            .mockImplementation(async ()=>  mockCreateUser());
    
            const res = await request(app).post('/api/users/create').send(invalidUser);
    

            expect(res.body?.success).toBeUndefined();
            expect(res.body?.data?.name).toBeUndefined();
    
        });
    });

    describe('test user login route', () => {
        const userLogin = {
            email: "user2@gmail.com",
            password: "Tester1234!"
        };
        
        const invalidUserLogin = {
            email: "user@gmail.com",
            password: "Tester1234!"
        }
    
        it('should return an object with success and data details of  user if logged in created', async () => {
            const mockLoginUser =  jest.fn((): any=> ({success: true, data: user}));
    
            jest
            .spyOn(UserAccountService.prototype, "loginUserService") 
            .mockImplementation(async ()=>  mockLoginUser());
    
            const res = await request(app).post('/api/users/login').send(userLogin);
    
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(user.name);
            expect(res.body.data.email).toBe(user.email);
    
        });
    });

})
    
// To close all open redis connections
afterAll(() => {
    close();
}); 