import React from 'react';

import ListItem from './listItem.jsx'

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Michelle!'
    };
  }

  render() {
    return (
      <div>
        <h3>My name is {this.state.name}</h3>
        <ul>
          {/* map each item in list to ListItem component */}
          {this.props.list.map((item) => {
            {/* pass in item name as props */}
            return <ListItem name={item}/>
          })}
        </ul>
      </div>
    );
  }
};