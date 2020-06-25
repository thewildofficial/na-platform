import { Action } from "../../shared/interfaces/shared";
import { IFeedback } from "../interfaces/feedback";

export const GET_FEEDBACKS_REQ = 'GET_FEEDBACKS_REQ';
export const getFeedbacksReq = (): Action<null> => ({
    type: GET_FEEDBACKS_REQ,
    payload: null,
});

export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACKS_SUCCESS';
export const getFeedbacksSuccess = (feedbacks: IFeedback[]): Action<IFeedback[]> => ({
    type: GET_FEEDBACKS_SUCCESS,
    payload: feedbacks,
});

export const GET_FEEDBACKS_FAIL = 'GET_FEEDBACKS_FAIL';
export const getFeedbacksFail = (error: Error): Action<Error> => ({
    type: GET_FEEDBACKS_FAIL,
    payload: error,
});
