import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props)

  }
  state = {
    taskList: [
      {
        taskName: 'study',
        totalTime: 0,
        targetTime: 0,
        memo: ''
      },
      {
        taskName: 'training',
        totalTime: 130,
        targetTime: 200,
        memo: 'until next year'
      },
    ]
  }
  handleEditTask = () => {
    console.log('handle edit task');
  }
  render() {
    return (
      <div>
        <h1>Time Stock</h1>
        {this.state.taskList.map(taskItem =>
          <TaskItem
            {...taskItem}
            onEditTask={this.handleEditTask}
          />
        )}
      </div>
    );
  }
}

const TaskItem = ({taskName, totalTime, targetTime, memo, onEditTask}) => (
  <div className="taskItem">
    <h3>{taskName}</h3>
    <p>total time：{totalTime}</p>
    <p>target time：{targetTime}</p>
    <p>memo：{memo}</p>
    <button onClick={onEditTask}>編集</button>
  </div>
);


export default App;
