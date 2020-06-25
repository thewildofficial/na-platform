import { ExampleObject } from '../interfaces/example';
import { Router } from 'express';
import { ExampleModel } from '../models/example.model';

export const ExampleWebApi = Router();

ExampleWebApi.get('/array', async (_req, res) => {
    try {
        let examples = await ExampleModel.find({});

        res.send(examples);
    } catch (err) {
        res.status(500).send(err);
    }
});
