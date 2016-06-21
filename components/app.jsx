import React from 'react';

import ToDoList from './toDoList.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World! To Do List!
        // pass in list as props for ToDoList component
        <ToDoList list={['milk', 'juice', 'eggs']} />
      </div>
    );
  }
};