import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Nav.css';
import App from './App';
import PresaleContainer from './PresaleContainer';
import MyAccount from './components/MyAccount/MyAccountContainer';
import Error404 from './Error404';
import Footer from './components/Footer';
import Faq from './components/Faq/Faq';
import Terms from './components/Terms';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';


//import createBrowserHistory from 'history/createBrowserHistory'
//const history = createBrowserHistory();

console.log('%cWELCOME TO CARWARS! ', 'background: #fff; color: #56a2fd; font-size: 48pt;');
console.log("%cDon't forget to follow us", 'background: #fff; color: #56a2fd; font-size: 24pt;');
console.log("%cTelegram:", 'background: #fff; color: #56a2fd; font-size: 24pt;');
console.log("%chttps://t.me/ethergames_au", 'background: #fff; color: #56a2fd; font-size: 18pt;');
console.log("%cDiscord:", 'background: #fff; color: #56a2fd; font-size: 24pt;');
console.log("%chttps://discord.gg/9wqx5aE", 'background: #fff; color: #56a2fd; font-size: 18pt;');
console.log(`%c 
            ___
  _-_-  _/\______\\__
_-_-__  / ,-. -|-  ,-.\`-.
hjw _-_- \`( o )----( o )-'
           \`-'      \`-'
           
           `, "font-family:monospace; font-size: 16pt;");

ReactDOM.render(


<BrowserRouter>
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="nav-logo navbar-brand mr-auto">
                        <NavLink exact to="/">
                            <img src="./img/CarWars_Logo.png" width="100%" alt="CarWars.cc Logo"/>
                        </NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-link"><NavLink exact to="/" activeClassName="nav-active active" >Home</NavLink></li>
                        <li className="nav-item nav-link"><NavLink exact to="/presale" activeClassName="nav-active active">Pre-Sale</NavLink></li>
                        <li className="nav-item nav-link"><NavLink exact to="/myAccount" activeClassName="nav-active active">My Account</NavLink></li>
                        <li className="nav-item nav-link"><NavLink exact to="/faq" activeClassName="nav-active active">FAQ</NavLink></li>
                    </ul>
            </div>
        </nav>

        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/presale" component={PresaleContainer}/>
            <Route path="/myAccount" component={MyAccount}/>
            <Route path="/faq" component={Faq}/>
            <Route path="/terms" component={Terms}/>
            <Route component={Error404} />
        </Switch>
        <Switch>
            <Route exact path="/" component={Footer}/> 
            <Route exact path="/presale" component={Footer}/>
            <Route exact path="/myAccount" component={Footer}/>
            <Route exact path="/faq" component={Footer}/>
            <Route path="/terms" component={Footer}/>
        </Switch>
    </div>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
