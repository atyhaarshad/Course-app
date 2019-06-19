import React from 'react';
import Course from './Course';

const CourseDetail = (props) => {
  if(!props.course){
    return <p>Loading</p>
  }

  return(
    <Course course={props.course} />
  )


}

export default CourseDetail;
