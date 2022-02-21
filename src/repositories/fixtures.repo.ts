import fixturesModel from "../models/fixtures.model";
import { IFixtures } from "../interfaces/fixtures.interface";

export const createFixturesRepo = async (fixturesBody: IFixtures)=> {

    const fixtures = new fixturesModel({
        homeTeam: fixturesBody.homeTeam,
        awayTeam: fixturesBody.awayTeam,
        status: 'pending',
        dateTime: fixturesBody.dateTime,
        venue: fixturesBody.venue,
        gameweek: fixturesBody.gameweek,
        referee: fixturesBody.referee,
        uniqueLink: fixturesBody.uniqueLink,
        hashTag: fixturesBody.hashTag,
        createdOn: new Date().toLocaleString()
    });
    
    const createFixtures = await fixtures.save();
    
    const fixtureId = createFixtures._id;
    const uniqueLink = `/api/fixtures/${fixtureId}`;
    const returnedFixture = await updateFixturesByIdRepo(fixtureId, {...fixturesBody, uniqueLink});
    

    return returnedFixture;
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
    const findFixtures = await fixturesModel.find({ status: status }).exec();
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
