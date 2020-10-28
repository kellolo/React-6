import { createStore , compose, applyMiddleware} from 'redux';
import initialReducers from './reducers';

import middlewares from '../middlewares';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// export default () => {
//     return createStore(initialReducers, {})
// }

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();

export function initStore() {
    return createStore(
        initialReducers(history), 
        {},
        compose(applyMiddleware(routerMiddleware(history), ...middlewares), reduxDevTool)
    )
}