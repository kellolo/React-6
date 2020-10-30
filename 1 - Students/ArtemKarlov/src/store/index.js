import {createStore, applyMiddleware, compose} from 'redux';
import initialReducers from './reducers';
import middlewares from '../middlewares/';


function initStore() {
    const initialStore = {};
    const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
    
    return createStore(
        initialReducers, 
        initialStore,
        compose(
            applyMiddleware(...middlewares),
            reduxDevTool
        )
    );
}

export default initStore;