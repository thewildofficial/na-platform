import { store, store$ } from "../../shared/services/state.service";
import * as actions from '../state/feedback.actions';
import { Observable } from "rxjs";
import { IFeedback } from "../interfaces/feedback";
import { map, skipWhile, distinctUntilChanged } from "rxjs/operators";
import * as selectors from '../state/feedback.selectors';

export function getFeedbacks() {
    store.dispatch(
        actions.getFeedbacksReq(),
    );
}

export const feedbacks$ = (): Observable<IFeedback[]> => store$.pipe(
    map(state => selectors.FEEDBACKS(state)),
    skipWhile(feedbacks => feedbacks === null),
    distinctUntilChanged(),
);
