import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './Containers/Header';
import InterviewList from './Containers/InterviewList/InterviewList';

const App = () => (
    <CssBaseline>
      <div className="App">
        <Header />
        <InterviewList />
      </div>
    </CssBaseline>
)

export default App;
