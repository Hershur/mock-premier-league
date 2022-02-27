import app from '../app';
import request from 'supertest';
import AdminAccountService from '../services/admin.services';
import { close } from '../database/redisConnection';



describe('test Admin routes', () => {
    const adminCreated = {
        name: "Assurance Femi",
        email: "user2@gmail.com",
        password: "Tester1234!",
        confirmPassword: "Tester1234!"
    };

    const adminUser = {
        name: "Assurance Femi",
        email: "admin@gmail.com",
    }
    
    describe('test create admin route', () => {
        
        const invalidUser = {
            email: "user2@gmail.com",
            password: "Tester1234!",
            confirmPassword: "Tester1234!"
        };
    
        it('should return an object with success and data details of admin user if successfully created', async () => {
            const mockCreateAdmin =  jest.fn((): any=> ({success: true, data: adminCreated}));
    
            jest
            .spyOn(AdminAccountService.prototype, "createAdminAccountService") 
            .mockImplementation(async ()=>  mockCreateAdmin());
    
            const res = await request(app).post('/api/admin/create').send(adminCreated);
    
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(adminCreated.name);
    
        });
    
        it('should return an invalid parameters error if the required fields are missing', async () => {
            const mockCreateAdmin =  jest.fn((): any=> ({success: true, data: adminCreated}));
    
            jest
            .spyOn(AdminAccountService.prototype, "createAdminAccountService") 
            .mockImplementation(async ()=>  mockCreateAdmin());
    
            const res = await request(app).post('/api/admin/create').send(invalidUser);
    

            expect(res.body?.success).toBeUndefined();
            expect(res.body?.data?.name).toBeUndefined();
    
        });
    });

    describe('test admin login route', () => {
        const adminLogin = {
            email: "admin@gmail.com",
            password: "Tester1234!"
        };
        
        const invalidAdminLogin = {
            email: "user@gmail.com",
            password: "Tester1234!"
        }
    
        it('should return an object with success and data details of admin user if logged in created', async () => {
            const mockLoginAdmin =  jest.fn((): any=> ({success: true, data: adminUser}));
    
            jest
            .spyOn(AdminAccountService.prototype, "loginAdminService") 
            .mockImplementation(async ()=>  mockLoginAdmin());
    
            const res = await request(app).post('/api/admin/login').send(adminLogin);
    
            expect(res.body).toHaveProperty("data");
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(adminUser.name);
            expect(res.body.data.email).toBe(adminUser.email);
    
        });
    });

})
    
// To close all open redis connections
afterAll(() => {
    close();
});