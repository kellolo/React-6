import {apiMiddleware} from 'redux-api-middleware';
import botMessageMD from './botMessageMD.js';
import createContactListMD from './createContactListMD.js';

export default [
    apiMiddleware,
    botMessageMD,
    createContactListMD,
];