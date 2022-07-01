import React from 'react';
import RepositoryList from './components/RepositoryList';
import LanguagePanel from './components/LanguagePanel';
import Repository from './components/Repository';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

//material UI font imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

export function App() {
  const [repos, setRepos] = useState([]);
  const [message, setMessage] = useState<string>('Loading...');
  const [displayedRepos, setDisplayedRepos] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState<any>(null);
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
        usedLanguages.push('All');
        setRepos(sortedRepos);
        setDisplayedRepos(sortedRepos);
        setLanguages(usedLanguages);
      } catch (e) {
        setMessage('An error occured. Please refresh the page.');
      }
    }
    getData();
  }, []);

  const onFilter = (language: string) => {
    if (language === 'All') {
      setDisplayedRepos(repos);
    } else {
      setDisplayedRepos(
        repos.filter((repo: any) => repo.language === language)
      );
    }
  };
  const onRepoClick = (title: string) => {
    const repo = repos.find((el: any) => el.name === title);
    setSelectedRepository(repo);
  };
  const onBackClick = () => {
    setSelectedRepository(null);
  };

  if (!repos.length) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <div>{message}</div>
      </Box>
    );
  } else if (selectedRepository) {
    const url = selectedRepository.commits_url;
    return (
      <Repository
        name={selectedRepository.name}
        commitUrl={url}
        fullName={selectedRepository.full_name}
        onBackClick={onBackClick}
      />
    );
  } else {
    return (
      <div className="App">
        <LanguagePanel languages={languages} onFilter={onFilter} />
        <RepositoryList repos={displayedRepos} onRepoClick={onRepoClick} />
      </div>
    );
  }
}
