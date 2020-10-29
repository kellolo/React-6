import {createStore} from 'redux';
import initialReducers from './reducers';


export default () => {
    const initialStore = {};
    return createStore(initialReducers, initialStore);
}