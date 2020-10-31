import { createStore, compose, applyMiddleware } from 'redux';
import initialReducer from './reducers';

import middlewares from '../middlewares';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


// export default () => {
//     return createStore(initialReducer, {})
// }

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();

export default function initStore() {
    return createStore(
        initialReducer(history), 
        {},
        compose(applyMiddleware(routerMiddleware(history), ...middlewares), reduxDevTool)
    )
} 