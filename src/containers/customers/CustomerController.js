import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/Request';

class CustomerController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/customers')
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }



  render(){
    return (
      <h1> This is the customer controller!!!! </h1>
    )
  }

}

export default CustomerController;
