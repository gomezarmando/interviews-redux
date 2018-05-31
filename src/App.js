import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InterviewList} from './Components';

const userInterviews = [
  {
    id: 1,
    name: 'HBO interview'
  },
  {
    id: 2,
    name: 'GOOGLE interview'
  }
]
class App extends Component {

  constructor (props) {
    super (props); 

    this.state = {
      interviewItems: userInterviews
    }
  }

  addInterview = event => {
    console.log('Top level Add method');
  }
  deleteInterview = event => {
    console.log('Top level Delete method');
  }
  updateInterview = event => {}

  render() {
    const {interviewItems} = this.state;

    return (
      <div className="App">
        <InterviewList
          items={interviewItems}
          onAdd={this.addInterview}
          onDelete={this.deleteInterview}
          onUpdate={this.updateInterview} />
      </div>
    );
  }
}

export default App;
