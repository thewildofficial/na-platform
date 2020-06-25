import { IFeedback } from "./feedback";

export interface FeedbackState {
    feedbacks: IFeedback[];
    error: string;
}
