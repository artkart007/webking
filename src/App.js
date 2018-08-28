import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Career from './components/Career'
import Training from './components/Training'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <main>
          <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/training" component={Training} />
          <Route exact path="/contact" component={Contact} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
