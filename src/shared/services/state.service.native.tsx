import { AppState } from '../interfaces/app-state';
import { appEpics } from '../state/app.epics';
import { appInitialState } from '../state/app.init-state';
import { appReducers } from '../state/app.reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
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
    storage: AsyncStorage,
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