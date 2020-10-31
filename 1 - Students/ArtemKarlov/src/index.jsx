import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from 'react-redux';

import {initStore, history} from './store';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';

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
        // MuiTypography: {
        //     colorTextSecondary: {
        //         color: '#808080'
        //     },
        // },
    }
});

const app = document.querySelector('#app');

const {store, persistor} = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
            {/* <BrowserRouter> */}
                <MuiThemeProvider theme={customTheme}>
                    <Router />
                </MuiThemeProvider>
                {/* </BrowserRouter> */}
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    ,
    app
);
