import { ITeam } from "../interfaces/teams.interface";
import { createTeamRepo, findTeamByNameAndAbbr, findTeamsRepo, findTeamByIdRepo, deleteTeamByIdRepo, updateTeamByIdRepo } from "../repositories/teams.repo";

export const createTeamService = async (teamBody: ITeam)=> {
    //Check if team exists
    const checkTeam = findTeamByNameAndAbbr(teamBody); 

    if(checkTeam){
        return {success: false, message: "Team already exists"};
    }

    const createTeam = await createTeamRepo(teamBody);
    return {success: true, data: createTeam};
};

export const findTeamsService = async ()=> {
    const findTeams = await findTeamsRepo();
    return {success: true, data: findTeams};
};

export const findTeamByIdService = async (id: string)=> {
    const findTeam = await findTeamByIdRepo(id);
    return {success: true, data: findTeam};
};

export const updateTeamByIdService = async (id: string, teamBody: ITeam)=> {
    const updateTeam = await updateTeamByIdRepo(id, teamBody);
    return {success: true, data: updateTeam};
};

export const deleteTeamByIdService = async (id: string)=> {
    const deleteFixtures = await deleteTeamByIdRepo(id);
    return {success: true, data: deleteFixtures};
};