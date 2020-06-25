import * as express from 'express';
import { SharedWebApi } from './webapis/shared.webapi';

export class Shared {
    constructor(app: express.Express) {
        this.setupSharedWebapi(app);
    }

    private setupSharedWebapi(app: express.Express) {
        app.use('/api/shared', SharedWebApi);
    }
}