import { Action } from '../../shared/interfaces/shared';
import { ExampleArrayItem } from '../interfaces/example-array-item';

export const GET_EXAMPLE_REQ = 'GET_EXAMPLE_REQ';
export const getExampleReq = (): Action<null> => ({
    type: GET_EXAMPLE_REQ,
    payload: null,
});

export const GET_EXAMPLE_OK = 'GET_EXAMPLE_OK';
export const getExampleOk = (exampleArray: ExampleArrayItem[]): Action<ExampleArrayItem[]> => ({
    type: GET_EXAMPLE_OK,
    payload: exampleArray,
});

export const GET_EXAMPLE_FAIL = 'GET_EXAMPLE_FAIL';
export const getExampleFail = (error: Error): Action<Error> => ({
    type: GET_EXAMPLE_FAIL,
    payload: error,
});
