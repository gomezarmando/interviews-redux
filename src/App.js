import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InterviewList} from './Components';

const userInterviews = [
  {
    id: 1,
    date: '2018-05-31T02:40:31.750Z',
    location: 'Chicago',
    company: 'HBO',
    recruiter: 'Randstad',
    rounds: [
      {
        id: 0,
        date: '2018-05-31T02:40:31.750Z',
        note: 'this is the first note',
        contacts: [
          {
            id: 1,
            name: 'test user one'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    date: '2018-05-31T02:40:31.750Z',
    location: 'Chicago',
    company: 'GOOGLE',
    recruiter: 'Randstad',
    rounds: [
      {
        id: 1,
        date: '2018-05-31T02:40:31.750Z',
        note: 'this is the second note',
        contacts: [
          {
            id: 1,
            name: 'test user four'
          }
        ]
      }
    ]
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
    const {interviewItems} = this.state;
    const updatedInterviewItems = [...interviewItems, {
      id: interviewItems.length + 1,
      date: new Date(),
      location: 'Chicago',
      company: '',
      recruiter: '',
      rounds: []
    }];

    this.setState({
      interviewItems: updatedInterviewItems
    });
  }
  
  deleteInterview = index => {
    console.log('Top level Delete method - deleting: ', index);
    const interviewItems = [...this.state.interviewItems];
    // const updatedInterviewItems = [...interviewItems.splice(index, 1)];
    interviewItems.splice(index, 1)

    this.setState({
      interviewItems
    });
  }

  updateInterview = (index, interview) => {
    console.log('Top level Update method');
    const {interviewItems} = this.state;
    const updatedInterviewItems = [...interviewItems];

    updatedInterviewItems[index] = Object.assign(updatedInterviewItems[index], interview);

    this.setState({
      interviewItems: updatedInterviewItems
    });
  }

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
