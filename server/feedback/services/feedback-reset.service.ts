import { requireUncached } from '../../shared/services/utils.service';
import { FeedbackModel } from '../models/feedback.model';

export async function resetFeedbackCollections() {
    try {
        let collection = await resetFeedback();

        return collection;
    } catch (err) {
        throw err;
    }
}

async function resetFeedback() {
    try {
        let samples = requireUncached('../../feedback/mocks/feedback.mocks.json');

        await FeedbackModel.remove({});
        await FeedbackModel.create(...samples);

        return 'feedback_feedback';
    } catch (err) {
        throw err;
    }
}
