import * as express from 'express';
import { FeedbackWebapi } from './webapi/feedback.webapi';

export class Feedback {
    constructor(app: express.Express) {
        this.setupFeedbackWebapi(app);
    }

    private setupFeedbackWebapi(app: express.Express) {
        app.use('/api/feedback', FeedbackWebapi);
    }
}
