import React from 'react';
import Customer from './Customer';

const CustomerList = (props) => {

  if(props.customers.length === 0){
    return (
      <p>Loading!</p>
    )
  }

  const allCustomers = props.customers.map((customer) => {
    return (
      <li key={customer.id} >
      <Customer customer={customer} />
      </li>
    )
  })

  return (
    <ul>{allCustomers}</ul>
  )

}

export default CustomerList;
