import {apiMiddleware} from 'redux-api-middleware';
import botMessageMD from './botMessageMD.js';
import contacts from './contacts.MW.js';
import logging from './logging.MW.js';

export default [
    apiMiddleware,
    botMessageMD,
    contacts,
    logging,
];