import teamsModel from "../models/teams.models";
import { ITeam } from "../interfaces/teams.interface";

export const createTeamRepo = async (teamBody: ITeam)=> {

    const team = new teamsModel({
        name: teamBody.name,
        nickName: teamBody.nickName,
        abbrName: teamBody.abbrName,
        stadium: teamBody.stadium,
        createdOn: new Date().toLocaleString()
    });
    
    const createTeam = await team.save();
  
    return createTeam;
};

export const findTeamsRepo = async ()=> {
    const teams = await teamsModel.find();
    return teams;
};

export const findTeamByIdRepo = async (id: string)=> {
    const team = await teamsModel.findById(id);
    return team;
};

export const findTeamByNameAndAbbr = async (teamBody: ITeam)=> {
    const findTeam = await teamsModel.findOne({ name: teamBody.name, abbrName: teamBody.abbrName}).exec();
    return findTeam;
};

export const updateTeamByIdRepo = async (id: string, teamBody: ITeam)=> {
    const updateTeam = await teamsModel.findByIdAndUpdate(id, teamBody).exec();
    return updateTeam;
};

export const deleteTeamByIdRepo = async (id: string)=> {
    const deleteTeam = await teamsModel.findByIdAndDelete(id);
    return deleteTeam;
};