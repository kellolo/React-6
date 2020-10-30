import {apiMiddleware} from 'redux-api-middleware';
import botMessageMD from './botMessageMD.js';

export default [
    apiMiddleware,
    botMessageMD,
];