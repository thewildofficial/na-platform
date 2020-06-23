import { AppState } from '../../shared/interfaces/app-state';
import { ExampleArrayItem } from '../interfaces/example-array-item';
import { ExampleState } from '../interfaces/example-state';
import { createSelector, Selector } from 'reselect';

const EXAMPLE_MODULE: Selector<AppState, ExampleState> = (state: AppState) => state.example;

export const EXAMPLE_ARRAY = createSelector<AppState, ExampleState, ExampleArrayItem[]>(
    EXAMPLE_MODULE,
    (state: ExampleState) => state.array,
);
