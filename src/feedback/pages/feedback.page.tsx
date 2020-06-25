import * as React from 'react';
import * as div from './feedback.page.style';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { feedbacks$, getFeedbacks } from '../services/feedback.service';
import { IFeedback } from '../interfaces/feedback';
import { Text } from 'react-native';

interface Props {}
interface State {
    feedbacks: IFeedback[];
}

export class FeedbackPage extends React.Component<Props, State> {
    private destroyed$ = new Subject<void>();

    constructor(props: Props) {
        super(props);

        this.state = {
            feedbacks: [],
        };
    }

    public render() {
        const { feedbacks } = this.state;

        return (
            <div.FeedbackPage>
                {
                    !!feedbacks.length &&
                    feedbacks.map(feedback => <Text key={feedback._id}>
                            {feedback.message}
                        </Text>
                    )
                }
            </div.FeedbackPage>
        );
    }

    public componentDidMount() {
        this.subscribeToFeedbacks();

        getFeedbacks();
    }

    public componentWillUnmount() {
        this.destroyed$.next();
    }

    private subscribeToFeedbacks() {
        feedbacks$().pipe(
            takeUntil(this.destroyed$),
        )
            .subscribe(feedbacks => {
                this.setState({ feedbacks: feedbacks });
            });
    }
}
