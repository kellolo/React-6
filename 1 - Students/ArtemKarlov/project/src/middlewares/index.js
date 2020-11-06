import {apiMiddleware} from 'redux-api-middleware';
import botMessageMD from './botMessageMD.js';
import testMD from './testMD.js';

export default [
    apiMiddleware,
    botMessageMD,
    testMD,
];