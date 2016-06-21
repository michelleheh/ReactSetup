import React from 'react';

export default class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    };
  }
  
  toggleDone() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // update component style based on current state and user interatction.
    const style = {
      textDecoration: this.state.done? 'line-through' : 'none'
    };

    return (
      // set style to style defined above
      // define onClick action
      <li className="list-group-item"
      style={style} 
      onClick={this.toggleDone.bind(this)}>{this.props.name}</li>
    );
  }
};
