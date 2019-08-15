import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import Yizhou from './views/Yizhou';
import Nav from './views/Nav';
import Hoc from './views/Hoc';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Nav} exact />
            <Route path="/Home" component={Home} />
            <Route path="/Yizhou" component={Yizhou} />
            <Route path="/Hoc" component={Hoc} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
