import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Registration from './components/login/Registration.js';
import Login from './components/login/Login.js';
import Welcome from './components/login/Welcome.js';
import Dashboard from './components/login/Dashboard';
import Services from './components/pages/Services';
import Home from './components/Home/Home';
import EditProfile from "./components/login/EditProfile.js";


class Routes extends React.Component {
  
  componentDidMount(){
    let email = sessionStorage.getItem('email') ? sessionStorage.getItem('email') : "";
    this.setState({
      email: email,
    });
  }

 render(){
    return(
      
        <Router>
         <div>
         
              <nav className="navbar header">
              <img src={require('./softvision-logo.svg')} className="App-logo"/>
                <ul className="nav navbar-nav menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                  <Link to="/login" >Login</Link>
                  </li>
                  <li>
                  <Link to="/registration" >SignUp</Link>
                  </li>
                  
                </ul>
              </nav>
              <Switch>    
              <Route path="/service" component={Services} />
              <Route path="/Registration" component={Registration} />
              <Route path="/Login" component={Login} />
              <Route path="/Welcome" component={Welcome} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route exact path="/"  component={Home} />
              <Route exact path="/EditProfile/:id"  component={EditProfile} />
              </Switch> 
            </div>
          </Router >
         
      );
 }
}
export default Routes;