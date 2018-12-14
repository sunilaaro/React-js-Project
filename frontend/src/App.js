import React, { Component } from 'react';
import './App.css';
import Router from './Router.js';
import {Image} from 'react-bootstrap';
import Home from './components/Home/Home.js';
import Footer from './components/Home/Footer.js';
import Sidebar from './components/sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App row">
          <div className="container-fluid">
            <Router />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
