import { ActionsObservable } from "redux-observable";
import { Action } from "../../shared/interfaces/shared";
import * as actions from './feedback.actions';
import { map, concatMap, catchError } from "rxjs/operators";
import * as webapi from '../webapi/feedback.webapi';
import { of } from "rxjs";

export const getFeedbacks$ = (action$: ActionsObservable<Action<null>>) =>
    action$.ofType(actions.GET_FEEDBACKS_REQ).pipe(
        map(action => action.payload),
        concatMap(() => webapi.getArray().pipe(
            map(feedbacks => actions.getFeedbacksSuccess(feedbacks)),
            catchError(error => of(actions.getFeedbacksFail(error))),
        )),
    );
