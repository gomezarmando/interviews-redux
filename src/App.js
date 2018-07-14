import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './Containers/Header';

import {InterviewList} from './Components';

// import {userInterviews} from './initialData';

const App = () => (
    <CssBaseline>
      <div className="App">
        <Header />
        {/* <InterviewList
          items={interviewItems}
          onAdd={this.addInterview}
          onDelete={this.deleteInterview}
          onUpdate={this.updateInterview} /> */}
      </div>
    </CssBaseline>
)

export default App;
