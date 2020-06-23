import { ExampleObject } from '../interfaces/example';
import { Router } from 'express';

export const ExampleWebApi = Router();

ExampleWebApi.get('/array', (_req, res) => {
    const someExamples: ExampleObject[] = [{
        id: '1',
        username: 'john',
        email: 'john@gmail.com'
    }, {
        id: '2',
        username: 'chuck',
        email: 'chuck@gmail.com'
    }];

    res.send(someExamples);
});
