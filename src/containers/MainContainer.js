import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CustomerController from './customers/CustomerController';

const MainContainer = () => {

  return (
    <Router>
    <React.Fragment>
      <NavBar />
        <Switch>
          <Route path="/customers" component={CustomerController}/>
        </Switch>
    </React.Fragment>
    </Router>
  );

}

export default MainContainer;
