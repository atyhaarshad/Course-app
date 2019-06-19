import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/Request';
import CourseList from '../../components/courses/CourseList';
import CourseDetail from '../../components/courses/CourseDetail';

class CourseController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    }

    this.findCourseById = this.findCourseById.bind(this);

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/courses')
    .then((data) => {
      this.setState({courses: data._embedded.courses})
    })
  }

  findCourseById(id){
    return this.state.courses.find((course) => {
      return course.id === parseInt(id);
    })
  }

  render(){
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/courses" render={() => <CourseList courses={this.state.courses}/> }/>
            <Route exact path="/courses/:id" render={(props) => {
              const id = props.match.params.id;
              const course = this.findCourseById(id);
              return <CourseDetail course={course} />
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }

}

export default CourseController;
