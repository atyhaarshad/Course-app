import React from 'react';
import Booking from './Booking';

const BookingList = (props) => {
  if(props.bookings.length === 0){
    return <p>Loading!</p>
  }

  const allBookings = props.bookings.map((booking) => {
    return (
      <li key={booking.id}>
      <Booking booking={booking} />
      </li>
    )
  })

  return (
    <ul> {allBookings}
    </ul>
  )

}

export default BookingList;
