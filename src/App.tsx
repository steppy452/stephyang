import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from './app/Home';
import { Personal } from './app/Personal';
import { Professional } from './app/Professional';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Helmet>
            <title>Stephanie Yang</title>
            <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,800|Arapey" rel="stylesheet" />
          </Helmet>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/personal" component={Personal} />
          <Route exact path="/professional" component={Professional} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
