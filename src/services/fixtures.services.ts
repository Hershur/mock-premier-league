import 'reflect-metadata';
import { Service } from "typedi";
import { IFixtures } from "../interfaces/fixtures.interface";
import { 
    createFixturesRepo,
    deleteFixturesByIdRepo, 
    findFixturesByIdRepo, 
    findFixturesByStatusRepo, 
    findFixturesRepo, 
    updateFixturesByIdRepo 
} from "../repositories/fixtures.repo";


@Service()
export default class FixtureService {

     async createFixturesService (fixtureBody: IFixtures) {
    
        const createFixtures = await createFixturesRepo(fixtureBody);
        return {success: true, data: createFixtures};
    };
    
     async findFixturesService() {
        const findFixtures = await findFixturesRepo();
        return {success: true, data: findFixtures};
    };
    
    async findFixtureByIdService (id: string){
        const findFixture = await findFixturesByIdRepo(id);
        return {success: true, data: findFixture};
    };
    
    async findFixturesByStatusService(status: string){
        const findFixtures = await findFixturesByStatusRepo(status);
        return {success: true, data: findFixtures};
    };
    
    async updateFixturesByIdService(id: string, fixturesBody: IFixtures) {
        const updateFixtures = await updateFixturesByIdRepo(id, fixturesBody);
        return {success: true, data: updateFixtures};
    };
    
    async deleteFixturesByIdService(id: string) {
        const deleteFixtures = await deleteFixturesByIdRepo(id);
        return {success: true};
    };
}