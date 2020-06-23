import * as exampleEpics from '../../example/state/example.epics';
import { AppState } from '../interfaces/app-state';
import { Action } from '../interfaces/shared';
import { combineEpics, Epic } from 'redux-observable';

/** Use alphabetic sorting */
export const appEpics: Epic<Action<AppState>, any> = combineEpics(
    ...getEpicsArr(exampleEpics),
);

/** Converting from import object to array. */
function getEpicsArr(epics: any): any[] {
    let epicsArr: any[] = [];
    let epicsNames = Object.keys(epics);

    // Array is needed for combineEpics.
    epicsNames.forEach(epicName =>
        epicsArr.push(epics[epicName]),
    );

    return epicsArr;
}