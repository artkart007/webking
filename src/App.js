import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Career from './components/Career'
import Training from './components/Training'
import Contact from './components/Contact'
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment >
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />

              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/training" component={Training} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />

          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const NoMatch = ({ location }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="error-template">
        <h1>
          Oops!</h1>
        <h2>
          404 Not Found</h2>
        <div className="error-details">
          Sorry, an error has occured, Requested page not found!
                </div>
        <div className="error-actions">
          <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
            Take Me Home </Link><Link to="/contact" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </Link>
        </div>
      </div>
    </div>
  </div>
)

export default App;
