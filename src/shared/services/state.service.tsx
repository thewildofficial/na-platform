import { AppState } from '../interfaces/app-state';
import { appEpics } from '../state/app.epics';
import { appInitialState } from '../state/app.init-state';
import { appReducers } from '../state/app.reducers';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { BehaviorSubject } from 'rxjs';

/**
 * The state service is used to bypass the standard React + Redux architecture.
 * The app will architecture will revolve around observables, similar to Angular + Ngrx.
 * Instead of `mapStateToProps` and `mapDispatchToProps` we use service calls and observables (dispatch, select).
 * <!> No need to test this service standalone, it's already used in all the tests.
 */

let epicsMiddleware = createEpicMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
    blacklist: ['topics', 'shared'],
};
const persistedReducer = persistReducer(persistConfig, appReducers);
const store: Store<AppState> = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(epicsMiddleware),
    ),
);
const persistor = persistStore(store);
const store$ = new BehaviorSubject<AppState>(appInitialState);

// Lazy loading ready
epicsMiddleware.run(appEpics);

let appState: AppState;

store.subscribe(() => {
    appState = store.getState();

    store$.next(appState);
});

export {
    store,
    store$,
    persistor,
};

/** Access state changes as an observable stream */
// export const storeObservable$ = new Observable<AppState>(_observer => {

    // All state store observable use `distinctUntilChanged()` operator.
    // Without this initial state, `distinctUntilChanged()` will be unable to compare previous and current state.
    // As a result, the webapi observable will miss the first response fron the server.
    // observer.next(appInitialState);

    // let appState: AppState;
    // store.subscribe(() => {
    // appState = store.getState();
    // store$.next(appState);
    // observer.next(appState);
    // });

// });