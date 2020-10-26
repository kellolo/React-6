import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    <BrowserRouter>
        <MuiThemeProvider theme={customTheme}>
            <Router />
        </MuiThemeProvider>   
    </BrowserRouter>
    ,
    app
);
