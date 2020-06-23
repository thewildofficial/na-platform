import { store, store$ } from '../../shared/services/state.service';
import * as exampleActions from '../state/example.actions';
import * as exampleSelectors from '../state/example.selectors';
import { distinctUntilChanged, map, skipWhile } from 'rxjs/operators';

export function getExampleArray() {
    store.dispatch(
        exampleActions.getExampleReq()
    );

    return exampleArray$();
}

export const exampleArray$ = () => store$.pipe(
    map(state => exampleSelectors.EXAMPLE_ARRAY(state)),
    skipWhile(arr => arr === undefined),
    distinctUntilChanged(),
);
