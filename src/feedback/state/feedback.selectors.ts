import { Selector, createSelector } from "reselect";
import { AppState } from "../../shared/interfaces/app-state";
import { FeedbackState } from "../interfaces/feedback-state";
import { IFeedback } from "../interfaces/feedback";

const FEEDBACK_MODULE: Selector<AppState, FeedbackState> = state => state.feedback;

export const FEEDBACKS = createSelector<AppState, FeedbackState, IFeedback[]>(
    FEEDBACK_MODULE,
    state => state.feedbacks,
);
