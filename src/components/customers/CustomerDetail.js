import React from 'react';
import Customer from './Customer';
import Request from '../../helpers/Request'

class CustomerDetail extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }

    this.handleDelete = this.handleDelete.bind(this);

  }

  componentWillMount(){
    if(this.props.customer){
    const url = "/api/customers/" + this.props.customer.id + "/bookings";
    const request = new Request();

    request.get(url)
    .then((data) => {
      this.setState({bookings: data._embedded.bookings})
      })
    }
    console.log(this.state.bookings);
  }

  handleDelete(){
    this.props.onDelete(this.props.customer.id)
  }

  render(){

    if(!this.props.customer){
    return <p>Loading</p>}

    return (


      <div>
        <Customer customer={this.props.customer} />
        <button onClick={this.handleDelete}>Delete Customer</button>
        <p>{this.state.bookings.date}</p>
        <p>{this.props.customer.id}</p>


      </div>

    )
  }
}

export default CustomerDetail;
