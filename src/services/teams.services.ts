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

    async createTeamService(teamBody: ITeam) {
        //Check if team exists
        const checkTeam = await findTeamByNameAndAbbr(teamBody); 
    
        if(checkTeam){
            return {success: false, message: "Team already exists"};
        }
    
        const createTeam = await createTeamRepo(teamBody);
        return {success: true, data: createTeam};
    };

    
    async findTeamsService() {
        const findTeams = await findTeamsRepo();
        return {success: true, data: findTeams};
    };
    
    
    async findTeamByIdService(id: string) {
        const findTeam = await findTeamByIdRepo(id);
        return {success: true, data: findTeam};
    };
    
    
    async updateTeamByIdService(id: string, teamBody: ITeam) {
        const updateTeam = await updateTeamByIdRepo(id, teamBody);
        return {success: true, data: updateTeam};
    };
    
    
    
    async deleteTeamByIdService(id: string) {
        const deleteFixtures = await deleteTeamByIdRepo(id);
        return {success: true};
    };
}


