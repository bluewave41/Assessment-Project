import React from 'react';
import Repository from './components/Repository';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Repository
        title="Test"
        description="Test/"
        language="English"
        forkCount={1}
      />
    </div>
  );
}
