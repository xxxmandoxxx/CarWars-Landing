import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Nav.css';
import App from './App';
import About from './About';
import PresaleContainer from './PresaleContainer';
import MyAccount from './components/MyAccount/MyAccountContainer';
import Error404 from './Error404';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

//import createBrowserHistory from 'history/createBrowserHistory'
//const history = createBrowserHistory();

ReactDOM.render(

<BrowserRouter>
    <div>
        <nav>
        <ul>
            <li className="nav-item"><NavLink exact to="/" activeClassName="nav-active">Home</NavLink></li>
            <li className="nav-item"><NavLink exact to="/about" activeClassName="nav-active">About</NavLink></li>
            <li className="nav-item"><NavLink exact to="/presale" activeClassName="nav-active">Pre-Sale</NavLink></li>
            <li className="nav-item"><NavLink exact to="/myAccount" activeClassName="nav-active">My Account</NavLink></li>

        </ul>
        </nav>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/presale" component={PresaleContainer}/>
            <Route path="/myAccount" component={MyAccount}/>
            <Route component={Error404} />
        </Switch>
    </div>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
