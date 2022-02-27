import app from '../app';
import request from 'supertest';
import TeamService from '../services/teams.services';
import { close } from '../database/redisConnection';



describe('test Teams routes', () => {
    const createTeam = {
        name: "Manchester United",
        nickName: "Red Devils",
        abbrName: "MUN",
        stadium: "Old Trafford"
    };
    
    describe('test create admin route', () => {
        
        const invalidUser = {
            email: "user2@gmail.com",
            password: "Tester1234!",
            confirmPassword: "Tester1234!"
        };
    
        it('should return an error object if user is not logged in', async () => {
            const mockCreateTeam =  jest.fn((): any=> ({success: true, data: createTeam}));
    
            jest
            .spyOn(TeamService.prototype, "createTeamService") 
            .mockImplementation(async ()=>  mockCreateTeam());
    
            const res = await request(app).post('/api/teams/create').send(createTeam);
    
            expect(res.body).toHaveProperty("error");
            expect(res.body.message).toBe("error");
    
        });
    });

})
    
// To close all open redis connections
afterAll(() => {
    close();
});