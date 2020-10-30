import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import initStore, {history} from './store';
import {ConnectedRouter} from 'connected-react-router';

import Router from './router.jsx';

const customTheme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root : {
                backgroundColor: '#258C60',
                color: '#ffffff',
            }
        },
        MuiListItemIcon: {
            root: {
                color: '#ffffff',
            }
        },
        MuiIconButton: {
            root: {
                color: '#ffffff',
            }
        },
        MuiTypography: {
            colorTextSecondary: {
                color: '#808080'
            },
        },
    }
});

const app = document.querySelector('#app');

ReactDom.render(
    <Provider store={initStore()}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={customTheme}>
                <Router />
            </MuiThemeProvider>   
        </ConnectedRouter>
    </Provider>
    ,
    app
);
