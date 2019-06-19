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
    this.handleDelete = this.handleDelete.bind(this);
    this.findCourseByTown = this.findCourseByTown.bind(this);

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

  findCourseByTown(town){
    const filteredCourses = [];
    this.state.courses.forEach((course) => {
      if (course.town === town){
        filteredCourses.push(course)
      }
    });
    return filteredCourses;
  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/courses/" + id;
    request.delete(url)
    .then(() => {
      window.location = "/courses";
    })
  }

  render(){
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/courses" render={() => <CourseList courses={this.state.courses}/> }/>
            <Route exact path="/courses/town/:town" render={(props) => {
              const town = props.match.params.town;
              const course = this.findCourseByTown(town);
              return <CourseList courses={this.findCourseByTown} />
            }} />

            <Route exact path="/courses/:id" render={(props) => {
              const id = props.match.params.id;
              const course = this.findCourseById(id);
              return <CourseDetail course={course} onDelete={this.handleDelete}/>
            }} />

          </Switch>
        </React.Fragment>
      </Router>
    )
  }

}

export default CourseController;
