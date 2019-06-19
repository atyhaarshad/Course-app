import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CustomerController from './customers/CustomerController';
import CourseController from './courses/CourseController';
import BookingController from './bookings/BookingController';

const MainContainer = () => {

  return (
    <Router>
    <React.Fragment>
      <NavBar />
        <Switch>
          <Route path="/customers" component={CustomerController}/>
          <Route path="/courses" component={CourseController}/>
          <Route path="/bookings" component={BookingController}/>
        </Switch>
    </React.Fragment>
    </Router>
  );

}

export default MainContainer;
