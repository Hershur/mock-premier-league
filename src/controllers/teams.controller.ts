import 'reflect-metadata';
import express from 'express';
import TeamService from '../services/teams.services';
import Container, { Service, Inject } from 'typedi';
import { ITeam } from '../interfaces/teams.interface';

@Service()
class TeamController {
    @Inject() private readonly _teamService: TeamService;

    async createTeam(req: express.Request, res: express.Response){
        try {
            const teamDTO = req.body as unknown as ITeam;
            const createTeam = await this._teamService.createTeamService(teamDTO);
            

            return res.status(201).json(createTeam);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }

    async findTeams(req: express.Request, res: express.Response){
        try {
            const findAllTeams = await this._teamService.findTeamsService();

            return res.status(200).json(findAllTeams);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }
    
    
    async findTeamById(req: express.Request, res: express.Response){
        try {
            const teamId = req.params.teamId;
            const findTeam = await this._teamService.findTeamByIdService(teamId);
            

            return res.status(200).json(findTeam);
        } catch (error) {
            res.statusCode = 500;
            
            return res.json({success: false, message: "An error occurred"});
        }
    }


    async updateTeamById(req: express.Request, res: express.Response){
        try {
            const teamId = req.params.teamId;
            const teamDTO = req.body;
            const updateTeam = await this._teamService.updateTeamByIdService(teamId, teamDTO);

            return res.status(200).json(updateTeam);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }


    async deleteTeamById(req: express.Request, res: express.Response){
        try {
            const teamId = req.params.teamId;
            const deleteTeam = await this._teamService.deleteTeamByIdService(teamId);
            

            return res.status(204);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }
}

const _teamController = Container.get<TeamController>(TeamController);

export default _teamController;