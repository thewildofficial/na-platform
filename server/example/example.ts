import { ExampleWebApi } from './webapis/example.webapi';
import * as express from 'express';

export class Example {
    constructor(app: express.Express) {
        this.setupExampleWebApi(app);
    }

    private setupExampleWebApi(app: express.Express) {
        app.use('/api/example', ExampleWebApi);
    }
}