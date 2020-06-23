import { ExampleArrayItem } from '../interfaces/example-array-item';
import { exampleArray$, getExampleArray } from '../services/example.service';
import * as React from 'react';
import { Text, View } from 'react-native';
import { RouteComponentProps, withRouter } from 'react-router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Props extends RouteComponentProps {}
interface State {
    exampleArr: ExampleArrayItem[];
}

class _ExamplePage extends React.Component<Props, State> {
    private destroyed$ = new Subject<void>();

    constructor(props: Props) {
        super(props);

        this.state = {
            exampleArr: []
        } as State;
    }

    public render() {
        const { exampleArr } = this.state;

        return (
            <View>
                <Text>Hello World</Text>

                <View>
                    {
                        !!exampleArr.length &&
                        exampleArr.map(example => <Text key={example.id}> {example.email} </Text>)
                    }
                </View>
            </View>
        );
    }

    public componentDidMount() {
        this.subscribeToExampleArray();

        getExampleArray();
    }

    private subscribeToExampleArray() {
        exampleArray$().pipe(
            takeUntil(this.destroyed$),
        )
            .subscribe(arr => {
                this.setState({ exampleArr: arr });
            });
    }
}

export const ExamplePage = withRouter<Props, any>(_ExamplePage);
