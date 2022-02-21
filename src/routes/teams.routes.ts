import express from 'express';
import { celebrate, Joi } from 'celebrate';
import TeamController from '../controllers/teams.controller';

const teamsRouter = express.Router();


/**
 * @description Create team
 * @method POST/
 */

teamsRouter.post('/create', 
    celebrate({
        body: Joi.object({
            name: Joi.string()
                .required()
                .messages({
                    "string.empty": "Name is required.",
                }),
            nickName: Joi.string()
                .required()
                .messages({
                    "string.empty": "nickName is required.",
                }),
            abbrName: Joi.string()
                .required()
                .messages({
                    "string.empty": "abbrName is required.",
                }),
            stadium: Joi.string(),
            
        }),
    }),
    async (req, res) => await TeamController.createTeam(req,res)
);


teamsRouter.get('/', async (req, res) => await TeamController.findTeams(req, res));


teamsRouter.get('/:teamId', 
    celebrate({ 
        params: Joi.object({
            teamId: Joi.string()
                .required()
                .messages({
                    "string.empty": "team id params is required.",
                }),
        })
    }),
    async (req, res) => await TeamController.findTeamById(req, res)
)
.put('/edit/:teamId',
    celebrate({ 
        params: Joi.object({
            teamId: Joi.string()
                .required()
                .messages({
                    "string.empty": "team id params is required.",
                }),
        })
    }),
    async (req, res) => await TeamController.updateTeamById(req, res)
)
.delete('/remove/:teamId',
    celebrate({ 
        params: Joi.object({
            teamId: Joi.string()
                .required()
                .messages({
                    "string.empty": "team id params is required.",
                }),
        })
    }),
    async (req, res) => await TeamController.deleteTeamById(req, res)
);



export default teamsRouter;
