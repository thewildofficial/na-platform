import { Router } from "express";
import * as service from '../services/feedback.service';

export const FeedbackWebapi = Router();

FeedbackWebapi.get('/feedbacks', async (_req, res) => {
    try {
        let feedbacks = await service.getAll();

        console.log('++ feedbacks', feedbacks);

        res.send(feedbacks);
    } catch (err) {
        res.status(500).send(err);
    }
});
