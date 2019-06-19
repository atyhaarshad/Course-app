import React from 'react';

const Course = (props) => {
  if(!props.course){
    return <p>Loading!</p>
  }

  return (
    <div>
      <p>Name: {props.course.name}</p>
      <p>Town: {props.course.town}</p>
      <p>Star Rating: {props.course.starRating}</p>
    </div>
  )

}

export default Course;
