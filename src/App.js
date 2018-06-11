import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    const interviewItems = [...this.state.interviewItems];
    interviewItems.splice(index, 1)

    this.setState({
      interviewItems
    });
  }

  updateInterview = (index, interview) => {
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
      <CssBaseline>
        <div className="App">
          <AppBar
            className='interview-list-app-bar'
            color='secondary'
            position='sticky' >
            <Toolbar>
              <Typography
                color='default'
                variant='title'>Interviews</Typography>
              <Button
                color="inherit"
                disableRipple
                onClick={this.addInterview}
                variant='outlined'>Add Company +</Button>
            </Toolbar>
          </AppBar>
          <InterviewList
            items={interviewItems}
            onAdd={this.addInterview}
            onDelete={this.deleteInterview}
            onUpdate={this.updateInterview} />
        </div>
      </CssBaseline>
    );
  }
}

export default App;
