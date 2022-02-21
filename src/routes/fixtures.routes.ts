import express from 'express';
import { celebrate, Joi } from 'celebrate';
import FixtureController from '../controllers/fixtures.controller';

const fixturesRouter = express.Router();


/**
 * @description Create fixture
 * @method POST/
 */

fixturesRouter.post('/create', 
    celebrate({
        body: Joi.object({
            homeTeam: Joi.string()
                .required()
                .messages({
                    "string.empty": "Homefixture is required.",
                }),
            awayTeam: Joi.string()
                .required()
                .messages({
                    "string.empty": "AwayFixture is required.",
                }),
            dateTime: Joi.string()
                .required()
                .messages({
                    "string.empty": "Date and time of fixture is required.",
                }),
            venue: Joi.string()
                .required()
                .messages({
                    "string.empty": "Venue is required.",
                }),
            referee: Joi.string()
                .required()
                .messages({
                    "string.empty": "Referee is required.",
                }),
            gameweek: Joi.string(),
            hashTag: Joi.string(),
            
        }),
    }),
    async (req, res) => await FixtureController.createFixture(req,res)
);


fixturesRouter.get('/find', 
    celebrate({ 
        query: Joi.object({
            status: Joi.string()
                .required()
                .messages({
                    "string.empty": "status query params is required.",
                }),
        })
    }),
    async (req, res) => await FixtureController.findFixturesByStatus(req, res)
    
).get('/', async (req, res) => await FixtureController.findFixtures(req, res)

).get('/:fixtureId', 
    celebrate({ 
        params: Joi.object({
            fixtureId: Joi.string()
                .required()
                .messages({
                    "string.empty": "fixture id params is required.",
                }),
        })
    }),
    async (req, res) => await FixtureController.findFixtureById(req, res)
).put('/edit/:fixtureId',
    celebrate({ 
        params: Joi.object({
            fixtureId: Joi.string()
                .required()
                .messages({
                    "string.empty": "fixture id params is required.",
                }),
        })
    }),
    async (req, res) => await FixtureController.updateFixtureById(req, res)
).delete('/remove/:fixtureId',
    celebrate({ 
        params: Joi.object({
            fixtureId: Joi.string()
                .required()
                .messages({
                    "string.empty": "fixture id params is required.",
                }),
        })
    }),
    async (req, res) => await FixtureController.deleteFixtureById(req, res)
);




export default fixturesRouter;
