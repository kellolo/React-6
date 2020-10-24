import { createStore } from 'redux';
import initialReducers from './reducers';

export default () => {
    return createStore(initialReducers, {},
        window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},)
}