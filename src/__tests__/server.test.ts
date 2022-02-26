import app from '../app';
import request from 'supertest';


describe('test default route', () => {
    it('should return a welcome message', async () => {
        const res =  await request(app).get('/');

        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Hello, welcome to my express server 💥");
    });
})


describe('test admin routes', () => {
    describe('test create route', () => {
        it('should return an object with success and data details of admin user if successfully created', async () => {
          const res = await request(app).post('/api/admin/create').send({
                "name": "Assurance Femi",
                "email": "user2@gmail.com",
                "password": "Tester1234!",
                "confirmPassword": "Tester1234!"
          });

          expect(res.body).toHaveProperty("data");
          expect(res.body.success).toBe(true);
        })
    });
    

})