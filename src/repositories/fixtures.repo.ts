import fixturesModel from "../models/fixtures.model";
import { IFixtures } from "../interfaces/fixtures.interface";

export const createFixturesRepo = async (fixturesBody: IFixtures)=> {

    const fixtures = new fixturesModel({
        homeTeam: fixturesBody.homeTeam,
        awayTeam: fixturesBody.awayTeam,
        status: 'Pending',
        dateTime: fixturesBody.dateTime,
        venue: fixturesBody.venue,
        gameweek: fixturesBody.gameweek,
        createdOn: new Date().toLocaleString()
    });
    
    const createFixtures = fixtures.save(async (err,fixture)=> {
        const fixtureId = fixture._id;
        const uniqueLink = `/api/fixtures/${fixtureId}`;
        await updateFixturesByIdRepo(fixtureId, {...fixture, uniqueLink});
    });
    
    return createFixtures;
};

export const findFixturesRepo = async ()=> {
    const fixtures = await fixturesModel.find();
    return fixtures;
};

export const findFixturesByIdRepo = async (id: string)=> {
    const fixtures = await fixturesModel.findById(id);
    return fixtures;
};

export const findFixturesByStatusRepo = async (status: string)=> {
    const findFixtures = await fixturesModel.find({ status }).exec();
    return findFixtures;
};

export const updateFixturesByIdRepo = async (id: string, fixturesBody: IFixtures)=> {
    const updateFixtures = await fixturesModel.findByIdAndUpdate(id, fixturesBody);
    return updateFixtures;
};

export const deleteFixturesByIdRepo = async (id: string)=> {
    const deleteFixtures = await fixturesModel.findByIdAndDelete(id);
    return deleteFixtures;
};