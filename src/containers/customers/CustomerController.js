import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/Request';
import CustomerList from '../../components/customers/CustomerList';

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
      <CustomerList customers={this.state.customers}/>
    )
  }

}

export default CustomerController;
