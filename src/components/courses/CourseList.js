import React from 'react';
import Course from './Course';

const CourseList = (props) => {
  if(props.courses.length === 0){
    return <p>Loading!</p>
  }

  const allCourses = props.courses.map((course) => {
    return (
      <li key={course.id}>
      <Course course={course} />
      </li>
    )
  })

  return (
    <ul> {allCourses}
    </ul>
  )

}

export default CourseList;
