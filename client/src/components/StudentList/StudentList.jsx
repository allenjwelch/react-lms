import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };

    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(students => (this.setState({students})))
  }
  render() {
    return (
        <div>
            Hello World
            <ul>
                {this.state.students.map(student =>
                    <li>
                        <h2>{student.title}</h2>
                        <p>{student.body}</p>
                    </li>
                )}
            </ul>
        </div>
        );
  }
}

export default StudentList;

