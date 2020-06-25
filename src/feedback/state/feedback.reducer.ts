import { FeedbackState } from "../interfaces/feedback-state";
import { feedbackInitialState } from "./feedback.init-state";
import { Action } from "../../shared/interfaces/shared";
import * as actions from './feedback.actions';

export function feedbackReducer(state: FeedbackState = feedbackInitialState, action: Action<any>) {
    switch (action.type) {
        case actions.GET_FEEDBACKS_SUCCESS: {
            return {
                ...state,
                feedbacks: action.payload,
            };
        }

        case actions.GET_FEEDBACKS_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
