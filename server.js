import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, match, RouterContext, browserHistory } from 'react-router';

import routes from './src/client/routes.js';

const app = express();

// app.use(express.static(__dirname));

app.get('*', (req, res) => {
    var html = '';
    match({ routes, location: req.url}, function(err, redirectLocation, renderProps) {
        if(renderProps)
        {
            html = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>);
            res.send(html);
        }
        else{
            res.status(404).send('Not found')
        }
    });
})

app.listen(3000);

module.exports = app;