import { Schema, Document, model } from "mongoose";
import { IFeedback } from "../interfaces/feedback";

export const FeedbackSchema: Schema = new Schema({
    message: {
        type: String,
        required: true,
    },
    sentBy: {
        type: String,
        required: true,
    },
    _id: {
        type: Schema.Types.ObjectId,
    }
}, {
    versionKey: false,
});

export interface IFeedbackModel extends IFeedback, Document { }
export const FeedbackModel = model<IFeedbackModel>('feedback_feedback', FeedbackSchema);
