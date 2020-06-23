import * as exampleActions from './example.actions';
import { AppState } from '../../shared/interfaces/app-state';
import { Action } from '../../shared/interfaces/shared';
import * as exampleWebApi from '../webapis/example.webapi';
import { Store } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

export const getExampleArray$ = (action$: ActionsObservable<Action<null>>, _store: Store<AppState>) =>
    action$.ofType(exampleActions.GET_EXAMPLE_REQ).pipe(
        map(action => action.payload),
        concatMap(() => exampleWebApi.getArray().pipe(
            map(arr => exampleActions.getExampleOk(arr)),
            catchError(err => of(exampleActions.getExampleFail(err)))
        )
    ));
