import React, {Component} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Home from '../components/content/home.js';
import About from '../components/content/about.js';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        )
    }
}

export default App;
