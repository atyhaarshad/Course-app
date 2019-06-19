import React from 'react';
import Course from './Course';

const CourseDetail = (props) => {
  if(!props.course){
    return <p>Loading</p>
  }

  const handleDelete = () => {
    props.onDelete(props.course.id);
  }

  return(
    <div>
      <Course course={props.course} />
      <button onClick={handleDelete}>Delete Course</button>
    </div>
  )

}

export default CourseDetail;
