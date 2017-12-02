import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <List/>
      </div>
    );
  }
}

export default App;
