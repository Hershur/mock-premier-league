import app from '../app';
import request from 'supertest';



describe('test default route', () => {
    it('should return a welcome message', async () => {
        const res =  await request(app).get('/');

        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual("Hello, welcome to my express server 💥");
    });
})


