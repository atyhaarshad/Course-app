import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/Request';
import CustomerList from '../../components/customers/CustomerList';
import CustomerDetail from '../../components/customers/CustomerDetail';

class CustomerController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }

    this.findCustomerbyId = this.findCustomerbyId.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/customers')
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  findCustomerbyId(id){
    return this.state.customers.find((customer) => {
      return customer.id === parseInt(id);
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/customers/" + id;

    request.delete(url)
    .then(() => {
      window.location = "/customers";
    })
  }

  render(){
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/customers" render={() => <CustomerList customers={this.state.customers}/> } />
            <Route exact path="/customers/:id" render={(props) => {
              const id = props.match.params.id;
              const customer = this.findCustomerbyId(id);
              return <CustomerDetail customer={customer} onDelete={this.handleDelete}/> }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default CustomerController;
