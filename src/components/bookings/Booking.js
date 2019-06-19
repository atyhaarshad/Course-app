import React from 'react';

const Booking = (props) => {
  if(!props.booking){
    return <p>Loading!</p>
  }

  const handleDelete = () => {
    props.onDelete(props.booking.id);
  }

  return (
    <div>
      <p>Date: {props.booking.date}</p>
      <p>Customer: {props.booking.customer.name}</p>
      <p>Course: {props.booking.course.name}</p>
      <button onClick={handleDelete}>Delete Booking</button>
    </div>
  )

}

export default Booking;
