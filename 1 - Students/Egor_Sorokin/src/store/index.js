import { createStore } from 'redux'
import initialReducers from './reducers'

export default () => {
    // let store = {};
    return createStore(initialReducers, {});
}