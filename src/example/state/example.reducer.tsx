import * as ExampleActions from './example.actions';
import { exampleInitState } from './example.init-state';
import { ExampleArrayItem } from '../interfaces/example-array-item';
import { ExampleState } from '../interfaces/example-state';

export const exampleReducer = (state: ExampleState = exampleInitState, action: any): ExampleState => {
    switch (action.type) {
        case ExampleActions.GET_EXAMPLE_OK: {
            return {
                ...state,
                array: action.payload as ExampleArrayItem[],
            };
        }

        case ExampleActions.GET_EXAMPLE_FAIL: {
            return {
                ...state,
                arrayError: action.payload as string,
            };
        }

        default: {
            return state;
        }
    }
};
