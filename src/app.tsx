import * as div from './app.style';
import { ExamplePage } from './example/pages/example.page';
import { Route, Switch } from './routing';
import { persistor, store } from './shared/services/state.service';
import * as React from 'react';
import { Provider } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Subject } from 'rxjs';

// We use SafeAreaView for phone like iPhone X build EStyleSheet in order to calculate styles.
interface Props extends RouteComponentProps {}

interface State {
    isLoading: boolean;
}

export class App extends React.Component<Props, State> {

    private destroyed$ = new Subject<void>();

    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            isLoading: false,
        };
    }

    public render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>

                    <div.AppSafeArea data-cy='app'>
                        <div.ScrollContent data-cy='content'
                            bounces={false}
                            keyboardShouldPersistTaps='handled'>

                            <Switch>
                                <Route exact={true} path='/' render={props => <ExamplePage {...props} />} />
                            </Switch>
                        </div.ScrollContent>
                    </div.AppSafeArea>
                </PersistGate>
            </Provider>
        );
    }

    public componentWillUnmount() {
        this.destroyed$.next();
    }
}

// In order to access history from props, use withRouter HOC
export default withRouter<Props, any>(App);
