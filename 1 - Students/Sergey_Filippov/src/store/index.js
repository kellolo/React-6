import { createStore } from 'redux';
import initialReducers from './reducers';

export default () => {
    return createStore(initialReducers, {})
}