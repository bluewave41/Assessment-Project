import React from 'react';
import Repository from './components/Repository';
import LanguagePanel from './components/LanguagePanel';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

export function App() {
  const [repos, setRepos] = useState([]);
  const [displayedRepos, setDisplayedRepos] = useState([]);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      const usedLanguages: string[] = [];
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_LINK + 'repos'
        );

        const sortedRepos = response.data.sort(
          (a: any, b: any) =>
            Date.parse(a.created_at) - Date.parse(b.created_at)
        );

        for (const repo of sortedRepos) {
          if (!usedLanguages.includes(repo.language)) {
            usedLanguages.push(repo.language);
          }
        }
        setRepos(sortedRepos);
        setDisplayedRepos(sortedRepos);
        setLanguages(usedLanguages);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const onFilter = (language: string) => {
    setDisplayedRepos(repos.filter((repo: any) => repo.language === language));
  };
  return (
    <div className="App">
      <LanguagePanel languages={languages} onFilter={onFilter} />
      {displayedRepos.map((repo: any) => (
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
