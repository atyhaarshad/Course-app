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

    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/bookings/" + id;
    request.delete(url)
    .then(() => {
      window.location = "/bookings";
    })
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
      <BookingList bookings={this.state.bookings} onDelete={this.handleDelete}/>
    )
  }

}

export default BookingController;
