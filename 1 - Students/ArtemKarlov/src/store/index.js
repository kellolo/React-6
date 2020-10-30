import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import initialReducers from './reducers';
import middlewares from '../middlewares/';

export const history = createBrowserHistory();

function initStore() {
    const initialStore = {};
    const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
    
    return createStore(
        initialReducers(history), 
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            reduxDevTool
        )
    );
}

export default initStore;