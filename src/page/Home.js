import React from 'react';
import { Link } from 'react-router-dom';
import SingleTask from '../parts/SingleTask';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList : [
        {
          name: 'Study React',
          totalTime: 0,
          targetTime: 100,
          memo: 'hogehoge'
        },
        {
          name: 'Create Blog',
          totalTime: 30,
          targetTime: 80,
          memo: 'priority second'
        },
      ]
    }
  }
  handleEditTask = (name) => {
    console.log('handle edit task', name);
  }
  render() {
    return (
      <div>
        <h1>This is Home</h1>
        <Link to='/edit/task/'>add new task</Link>
        {this.state.taskList.map(task => <SingleTask {...task} onEditTask={this.handleEditTask} />)}
      </div>
    )
  }
}


export default Home;