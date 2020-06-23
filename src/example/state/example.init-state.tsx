import { ExampleArrayItem } from '../interfaces/example-array-item';
import { ExampleState } from '../interfaces/example-state';

export const exampleInitState: ExampleState = {
    array: [] as ExampleArrayItem[],
    arrayError: '',
};
