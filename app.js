import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Main from './src/components/main.js';
import Home from "./src/components/content/home.js";
import About from "./src/components/content/about.js";

// if(typeof window !== 'undefined')
// {
const routes = 
    <Route path='/' component={Main} >
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
    </Route>;
// }

export default routes;
// if(typeof window !== 'undefined')
// {
//   ReactDOM.render(
//     <Router history={browserHistory}>
//       <Route path='/' component={Main} >
//           <IndexRoute component={Home} />
//           <Route path='/about' component={About} />
//       </Route>
//     </Router>, 
//   document.getElementById('main'));
// }

// module.exports =
// <Route path='/' component={Main} >
//     <IndexRoute component={Home} />
//     <Route path='/about' component={About} />
// </Route>;


// if(typeof window !== 'undefined') {
//   ReactDOM.render(
//     <Router history={browserHistory}>
//       <Route path='/' component={Main} >
//           <IndexRoute component={Home} />
//           <Route path='/about' component={About} />
//       </Route>
//     </Router>, 
//   document.getElementById('main'));
// }
// ReactDOM.render(<Main />, document.getElementById('main'));