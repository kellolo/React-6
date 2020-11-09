import { createStore, compose, applyMiddleware } from 'redux';
import initialReducer from './reducers';

import middlewares from '../middlewares';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const persistConfig = {
//     key: 'geekmessanger',
//     storage,
//     stateReconciler: autoMergeLevel2,
//     whitelist: ['chatsReducer'],
//  };

// export default () => {
//     return createStore(initialReducer, {})
// }

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();

export default function initStore() {
    // const store = createStore(
    //     persistReducer(persistConfig, initialReducer(history)), 
    //     {},
    //     compose(applyMiddleware(routerMiddleware(history), ...middlewares), reduxDevTool)
    // )

    // const persistor = persistStore(store);

    // return { store, persistor };
    return createStore(
        initialReducer(history), 
        {},
        compose(applyMiddleware(routerMiddleware(history), ...middlewares), reduxDevTool)
    )

} 