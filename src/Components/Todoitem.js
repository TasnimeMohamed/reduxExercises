import React, { Component } from 'react';


export default class Todoitem extends Component {
 

  render() {
    return <p>{this.props.todo.title} </p>

  }

}