import React from 'react'
import ReactDom from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#b23c17',
        main: '#ff5722',
        dark: '#ff784e',
        contrastText: '#fff',
      },
      secondary: {
        light: '#b22a00',
        main: '#ff3d00',
        dark: '#ff6333',
        contrastText: '#000',
      },
    },

    overrides: {
        // Style sheet name
        MuiListItem: {
            // Name of the rule
          root: {
            "&$selected": {
                backgroundColor: "#ffb3b3",
              },
            backgroundColor: '#ffebeb',
            marginTop: '-1px',
            borderTop: '1px solid #cc6c6c7a',
            borderBottom: '1px solid #cc6c6c7a',
          },
          button: {
            '&$selected':{
                '&:hover': {
                    backgroundColor: "#ffb3b3",
                 },
            },
            '&:hover': {
                backgroundColor: "#ffb3b3",
             },
          }

        //   selected: {
        //     backgroundColor: '#ffb3b3',
        //   },
        },
    },
});

const app = document.querySelector('#app');

import MainApp from './components/MainApp/MainApp.jsx'

ReactDom.render(
    <ThemeProvider theme={theme}>
        <div className="container">
            <MainApp author = 'Egor'/>
        </div>
    </ThemeProvider>,
    app
)