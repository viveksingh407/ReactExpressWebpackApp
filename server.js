import express from 'express';
import path from 'path';

import React from 'react';
import ReactDOM from 'react-dom';
import { match } from 'react-router';

import routes from './src/client/routes.js';

const app = express();

app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res, next) => {
    match({routes, location: req.url}, function(err, redirectLocation, renderProps) {
        if(renderProps)
        {
            res.sendfile(path.resolve(__dirname, 'index.html'));
        }
        else{
            res.status(404).send('Not found')
        }
    });
})

app.listen(3000);

module.exports = app;