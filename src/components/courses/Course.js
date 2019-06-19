import React from 'react';
import {Link} from 'react-router-dom';

const Course = (props) => {
  if(!props.course){
    return <p>Loading!</p>
  }

  const url = "/courses/" + props.course.id;

  return (
    <React.Fragment>
      <Link to={url}>{props.course.name} </Link>
      <p>Name: {props.course.name}</p>
      <p>Town: {props.course.town}</p>
      <p>Star Rating: {props.course.starRating}</p>
      </React.Fragment>
  )
}

export default Course;
