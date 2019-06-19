import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/Request';
import BookingList from '../../components/bookings/BookingList';

class BookingController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/bookings')
    .then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  render(){
    return (
      <BookingList bookings={this.state.bookings}/>
    )
  }

}

export default BookingController;
