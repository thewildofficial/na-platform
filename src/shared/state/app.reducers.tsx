import { exampleReducer } from '../../example/state/example.reducer';
import { AppState } from '../interfaces/app-state';
import { combineReducers, Reducer } from 'redux';

/** Use alphabetic sorting */
export const appReducers: Reducer<AppState> = combineReducers({
    example: exampleReducer,
});
