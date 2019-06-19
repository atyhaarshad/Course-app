import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CustomerController from './customers/CustomerController';
import CourseController from './courses/CourseController';

const MainContainer = () => {

  return (
    <Router>
    <React.Fragment>
      <NavBar />
        <Switch>
          <Route path="/customers" component={CustomerController}/>
          <Route path="/courses" component={CourseController}/>
        </Switch>
    </React.Fragment>
    </Router>
  );

}

export default MainContainer;
