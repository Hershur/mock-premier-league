import 'reflect-metadata';
import { Service } from "typedi";
import { ITeam } from "../interfaces/teams.interface";
import { 
    createTeamRepo, 
    findTeamByNameAndAbbr, 
    findTeamsRepo, 
    findTeamByIdRepo, 
    deleteTeamByIdRepo, 
    updateTeamByIdRepo 
} from "../repositories/teams.repo";


@Service()
export default class TeamService {

    createTeamService = async (teamBody: ITeam)=> {
        //Check if team exists
        const checkTeam = await findTeamByNameAndAbbr(teamBody); 
    
        if(checkTeam){
            return {success: false, message: "Team already exists"};
        }
    
        const createTeam = await createTeamRepo(teamBody);
        return {success: true, data: createTeam};
    };

    
    findTeamsService = async ()=> {
        const findTeams = await findTeamsRepo();
        return {success: true, data: findTeams};
    };
    
    
    findTeamByIdService = async (id: string)=> {
        const findTeam = await findTeamByIdRepo(id);
        return {success: true, data: findTeam};
    };
    
    
    updateTeamByIdService = async (id: string, teamBody: ITeam)=> {
        const updateTeam = await updateTeamByIdRepo(id, teamBody);
        return {success: true, data: updateTeam};
    };
    
    
    
    deleteTeamByIdService = async (id: string)=> {
        const deleteFixtures = await deleteTeamByIdRepo(id);
        return {success: true};
    };
}


