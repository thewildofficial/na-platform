import { ExampleState } from '../../example/interfaces/example-state';
import { FeedbackState } from '../../feedback/interfaces/feedback-state';

export interface AppState {
    example: ExampleState;
    feedback: FeedbackState;
}
