import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    console.log('handleClick', this.props.todo);
    this.props.handleToggle(this.props.todo.id);
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.todo.name} { this.props.todo.completed?<span> ✔</span> : <span></span> }</li>);
  };
}
