import 'reflect-metadata';
import express from 'express';
import FixtureService from '../services/fixtures.services';
import Container, { Service, Inject } from 'typedi';
import { IFixtures } from '../interfaces/fixtures.interface';

@Service()
class FixtureController {
    @Inject() private readonly _fixtureService: FixtureService;

    async createFixture(req: express.Request, res: express.Response){
        try {
            const fixtureDTO = req.body as unknown as IFixtures;
            const createFixture = await this._fixtureService.createFixturesService(fixtureDTO);
            
            console.log("Creating", createFixture);

            return res.status(201).json(createFixture);
        } catch (error) {
            res.statusCode = 500;
            
            return res.status(500).json({success: false, message: error.message});
        }
    }

    async findFixtures(req: express.Request, res: express.Response){
        try {
            const findAllFixtures = await this._fixtureService.findFixturesService();


            return res.status(200).json(findAllFixtures);
        } catch (error) {
            
            return res.status(500).json({success: false, message: "An error occurred"});
        }
    }
    
    
    async findFixtureById(req: express.Request, res: express.Response){
        try {
            const fixtureId = req.params.fixtureId;
            const findFixture = await this._fixtureService.findFixtureByIdService(fixtureId);
            

            return res.status(200).json(findFixture);
        } catch (error) {
            
            return res.status(500).json({success: false, message: "An error occurred"});
        }
    }

    async findFixturesByStatus(req: express.Request, res: express.Response){
        try {
            const fixtureStatus = req.query.status as string;
            const findFixture = await this._fixtureService.findFixturesByStatusService(fixtureStatus.toLowerCase());
            
            console.log("query")
            return res.status(200).json(findFixture);
        } catch (error) {
            
            return res.status(500).json({success: false, message: "An error occurred"});
        }
    }




    async updateFixtureById(req: express.Request, res: express.Response){
        try {
            const fixtureId = req.params.fixtureId;
            const fixtureDTO = req.body;
            const updateFixture = await this._fixtureService.updateFixturesByIdService(fixtureId, fixtureDTO);
            

            return res.status(200).json(updateFixture);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }


    async deleteFixtureById(req: express.Request, res: express.Response){
        try {
            const fixtureId = req.params.fixtureId;
            const deleteFixture = await this._fixtureService.deleteFixturesByIdService(fixtureId);

            return res.status(204);
        } catch (error) {
            return res.status(500).json({success: false, message: "An error occurred"});

        }
    }
}

const _fixtureController = Container.get<FixtureController>(FixtureController);

export default _fixtureController;