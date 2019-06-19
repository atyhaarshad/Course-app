import React from 'react';

const Customer = (props) => {

  if(!props.customer){
    return <p>Loading!</p>
  }
  return (
    <div>
      <p>Name: {props.customer.name}</p>
      <p>Age: {props.customer.age}</p>
      <p>Town: {props.customer.town}</p>
    </div>

  )
}

export default Customer;
