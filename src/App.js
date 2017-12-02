import React, { Component } from 'react';
import './App.css';
import Search from './components/input';
import List from './components/list';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <List/>
      </div>
    );
  }
}

export default App;
