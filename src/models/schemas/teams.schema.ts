import mongoose from 'mongoose';
import { ITeam } from '../../interfaces/teams.interface';


export const teamSchema = new mongoose.Schema<ITeam>({
    name: {
        type: String,
        required: true, 
        unique: true
    },
    nickName: {
        type: String,
        required: true
    },
    abbrName: {
        type: String,
        required: true, 
        unique: true
    },
    createdOn: {
        type: String,
        required: true
    },
    stadium: String,
});