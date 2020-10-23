import { createStore } from 'redux';
import initialReducer from './reducers';


export default () => {
    return createStore(initialReducer, {})
}