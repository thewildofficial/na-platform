import { FeedbackModel } from "../models/feedback.model";

export async function getAll() {
    try {
        let response = await FeedbackModel.find({});

        return response;
    } catch (err) {
        throw err;
    }
}
