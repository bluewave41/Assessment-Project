import React from 'react';
import Repository from './components/Repository';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

export function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_LINK + 'repos'
        );
        setRepos(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  return (
    <div className="App">
      {repos.map((repo: any) => (
        <Repository
          key={repo.id}
          title={repo.name}
          description={repo.description}
          language={repo.description}
          forkCount={repo.forks_count}
        />
      ))}
    </div>
  );
}
