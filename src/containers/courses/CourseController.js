import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/Request';
import CourseList from '../../components/courses/CourseList';

class CourseController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    }

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/courses')
    .then((data) => {
      this.setState({courses: data._embedded.courses})
    })
  }

  render(){
    return (
      <CourseList courses={this.state.courses}/>
    )
  }

}

export default CourseController;
