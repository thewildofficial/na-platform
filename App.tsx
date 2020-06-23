import HybridApp from './src/app';
import { Router } from './src/routing';
import * as React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
(global as any).process.version = '0.1.0';

interface Props {}
interface State {}

YellowBox.ignoreWarnings(['Require cycle']);
console.ignoredYellowBox = ['Require cycle'];
console.disableYellowBox = true;

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <HybridApp />
            </Router>
        );
    }
}

AppRegistry.registerComponent('NexusAuroraPlatform', () => App);