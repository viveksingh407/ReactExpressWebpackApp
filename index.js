import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './src/client/App.js';

if (typeof window !== 'undefined'){
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
}
