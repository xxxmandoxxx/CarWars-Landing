import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Nav.css';
import App from './App';
import About from './About';
import PresaleContainer from './PresaleContainer';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

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

        </ul>
        </nav>

        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/presale" component={PresaleContainer}/>
    </div>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
