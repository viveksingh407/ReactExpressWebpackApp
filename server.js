import express from 'express';
import path from 'path';
import routes from './app.js';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, match, RouterContext, browserHistory } from 'react-router';
import hist from 'history';
// import Main from './src/components/main.js';
// import Home from "./src/components/content/home.js";
// import About from "./src/components/content/about.js";

const app = express();

// app.use(express.static(__dirname));

app.get('*', (req, res) => {
    // const location = hist.createLocation(req.path);
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

// console.log(ReactDOMServer.renderToString(
//     <Router history={browserHistory}>{routes}</Router>, document.getElementById('main')));

// var html = <div>Hi</div>;

// if(typeof window !== 'undefined'){
//   res.render('index', function(err, html) {
// console.log('hi');
    // res.send(html);
//   });
// }
// return res.render('index', "Hi");


//     console.log(typeof window);
// if(typeof window !== 'undefined') {console.log(req);
    // return res.render('index', routes);
// }

//   var router = Router.create({location: req.url, routes: routes});

//   router.run(function(Handler, state)
//   {
//       var html = React.renderToString(<Handler />);
//       return res.render('react_page', {html: html});
//   });
    // var html = ReactDOM.render(
    //     <Router history={browserHistory}>
    //         {routes}
    //     </Router>, 
    // document.getElementById('main'));

    // res.render('react_page', {html: html});
//   var router = <Router history={browserHistory}> {routes}</Router>;

//   router.run(function(Handler, state) {
//     var html = React.render(<Handler/>)
//     return res.render('react_page', {html: html})
//   })
})

app.listen(3000);

module.exports = app;