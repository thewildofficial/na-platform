import { Router } from 'express';
import { resetDatabase } from '../services/reset-database';

export const SharedWebApi = Router();

SharedWebApi.get('/reset-database', async (req, res) => {
    try {
        let response = await resetDatabase();

        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});
