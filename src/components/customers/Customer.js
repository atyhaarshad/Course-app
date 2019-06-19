import React from 'react';
import {Link} from 'react-router-dom';


const Customer = (props) => {

  if(!props.customer){
    return <p>Loading!</p>
  }

  const url = "/customers/" + props.customer.id;

  return (
    <React.Fragment>
      <Link to={url}>{props.customer.name} </Link>
      <p>Age: {props.customer.age}</p>
      <p>Town: {props.customer.town}</p>
    </React.Fragment>

  )
}

export default Customer;
