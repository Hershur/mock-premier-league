import mongoose from 'mongoose';
import { IFixtures } from '../../interfaces/fixtures.interface';


export const fixturesSchema = new mongoose.Schema<IFixtures>({
    homeTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    referee: {
        type: String,
        required: true
    },
    uniqueLink: String,
    gameweek: String,
    hashTag: String,
});