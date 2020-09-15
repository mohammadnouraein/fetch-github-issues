import React, { FunctionComponent } from 'react';
import './App.css';
import { IssueList } from './components/Issues/issue-list.component';
import { CONFIGS } from './configuration/config';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <IssueList repository={CONFIGS.REPOSITORY} />
    </div>
  );
}

export default App;
