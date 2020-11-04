import {apiMiddleware} from 'redux-api-middleware';
import botMessageMD from './botMessageMD.js';
import createContactListMD from './createContactListMD.js';
import testMD from './testMD.js';

export default [
    apiMiddleware,
    botMessageMD,
    createContactListMD,
    testMD,
];