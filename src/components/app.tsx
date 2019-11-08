import React, { Component } from 'react';
import Todos from './todos';
import Notification from './notification';

import "../styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Easy Peasy + Typescript + Hook Form <small>Todo List</small></h1>
        
        <Todos />
        <Notification />
      </div>
    );
  }
}

export default App;
