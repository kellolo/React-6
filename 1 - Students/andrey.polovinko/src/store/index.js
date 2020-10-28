import {createStore,compose,applyMiddleware} from 'redux';
import initialReducers from './reducers';

import middlewares from '../middlewares/index.js'

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();

// export default () => {
//     return createStore(initialReducers, {})
// }

export function initStore(middleware1) {
    return createStore(
        initialReducers(history),
        {},
        compose(applyMiddleware(routerMiddleware(history), ...middlewares), reduxDevTool)
    )
}