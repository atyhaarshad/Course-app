import React from 'react';

const Booking = (props) => {
  if(!props.booking){
    return <p>Loading!</p>
  }

  return (
    <div>
      <p>Date: {props.booking.date}</p>
      <p>Customer: {props.booking.customer.name}</p>
      <p>Course: {props.booking.course.name}</p>
    </div>
  )

}

export default Booking;
