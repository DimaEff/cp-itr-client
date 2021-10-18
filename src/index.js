import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from "@mui/material";
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {global} from './globalStyles';


ReactDOM.render(
    <>
        <BrowserRouter>
            <GlobalStyles styles={global}/>
            <App/>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
