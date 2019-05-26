import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todo extends Component {
    
  render() {
  console.log('this.props.todo', this.props.Todo)

    return this.props.Todo.map((todo) =>
    (
      <Todoitem  Key={todo.id} todo={todo} />
    ));
  }
}


export default Todo;
