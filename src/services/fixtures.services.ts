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

    createFixturesService = async (fixtureBody: IFixtures)=> {
    
        const createFixtures = await createFixturesRepo(fixtureBody);
        return {success: true, data: createFixtures};
    };
    
    findFixturesService = async ()=> {
        const findFixtures = await findFixturesRepo();
        return {success: true, data: findFixtures};
    };
    
    findFixtureByIdService = async (id: string)=> {
        const findFixture = await findFixturesByIdRepo(id);
        return {success: true, data: findFixture};
    };
    
    findFixturesByStatusService = async (status: string)=> {
        const findFixtures = await findFixturesByStatusRepo(status);
        return {success: true, data: findFixtures};
    };
    
    updateFixturesByIdService = async (id: string, fixturesBody: IFixtures)=> {
        const updateFixtures = await updateFixturesByIdRepo(id, fixturesBody);
        return {success: true, data: updateFixtures};
    };
    
    deleteFixturesByIdService = async (id: string)=> {
        const deleteFixtures = await deleteFixturesByIdRepo(id);
        return {success: true};
    };
}