import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import Nav from './views/Nav';
import * as serviceWorker from './serviceWorker';


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/nav" component={Nav} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
