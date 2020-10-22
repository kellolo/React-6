import { createStore } from 'redux';
import initialReducer from './redusers';


export default () => {
    return createStore(initialReducer, {})
}