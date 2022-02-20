import { IFixtures } from "../interfaces/fixtures.interface";
import { createFixturesRepo, deleteFixturesByIdRepo, findFixturesByIdRepo, findFixturesByStatusRepo, findFixturesRepo, updateFixturesByIdRepo } from "../repositories/fixtures.repo";

export const createFixturesService = async (teamBody: IFixtures)=> {

    const createFixtures = await createFixturesRepo(teamBody);
    return {success: true, data: createFixtures};
};

export const findFixturessService = async ()=> {
    const findFixtures = await findFixturesRepo();
    return {success: true, data: findFixtures};
};

export const findFixtureByIdService = async (id: string)=> {
    const findFixture = await findFixturesByIdRepo(id);
    return {success: true, data: findFixture};
};

export const findFixturesByStatusService = async (status: string)=> {
    const findFixtures = await findFixturesByStatusRepo(status);
    return {success: true, data: findFixtures};
};

export const updateFixturesByIdService = async (id: string, fixturesBody: IFixtures)=> {
    const updateFixtures = await updateFixturesByIdRepo(id, fixturesBody);
    return updateFixtures;
};

export const deleteFixturesByIdService = async (id: string)=> {
    const deleteFixtures = await deleteFixturesByIdRepo(id);
    return deleteFixtures;
};