import { exampleInitState } from '../../example/state/example.init-state';
import { AppState } from '../interfaces/app-state';
import { feedbackInitialState } from '../../feedback/state/feedback.init-state';

export const appInitialState: AppState = {
    example: exampleInitState,
    feedback: feedbackInitialState,
};
