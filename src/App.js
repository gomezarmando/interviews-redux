import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InterviewList} from './Components';

const userInterviews = [
  {id: 1, name: 'HBO interview'},
  {id: 2, name: 'GOOGLE interview'}
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <InterviewList
          items={userInterviews} />
      </div>
    );
  }
}

export default App;
