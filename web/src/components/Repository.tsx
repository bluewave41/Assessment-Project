import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Repository.css';
import FloatingButton from './FloatingButton';
import Box from '@mui/material/Box';

interface RepositoryProps {
  name: string;
  commitUrl: string;
  fullName: string;
  onBackClick: any;
}

const Repository = (props: RepositoryProps) => {
  const [commitData, setCommitData] = useState<any>({});
  const [error, setError] = useState('');

  useEffect(() => {
    async function getCommits() {
      const data: any = {};

      try {
        //example URL: //https://api.github.com/repos/silverorange/admin/commits{/sha}
        //lets remove the {/sha} with a regex

        const response = await axios.get(props.commitUrl.replace(/\{.*\}/, ''));
        data.commit = response.data[0].commit;
      } catch (e) {
        setError('No commits found for that repository.');
      }

      try {
        const readmeResponse = await axios.get(
          `https://raw.githubusercontent.com/${props.fullName}/master/README.md`
        );
        data.readme = readmeResponse.data;
      } catch (e) {
        console.log(e);
      }

      setCommitData(data);
    }
    getCommits();
  }, [props.commitUrl, props.fullName]);

  if (error) {
    return (
      <div>
        <div>{error}</div>
        <button onClick={props.onBackClick}>Back</button>
      </div>
    );
  } else if (!commitData.hasOwnProperty('commit')) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <div>Loading...</div>
      </Box>
    );
  }
  return (
    <div className="repository">
      <h1>{props.name}</h1>
      <div>Author: {commitData.commit.author.name}</div>
      <div>Date: {new Date(commitData.commit.author.date).toDateString()}</div>
      <div>Message: {commitData.commit.message}</div>
      {commitData.readme && (
        <div className="repository">
          <h2>Readme</h2>
          <div style={{ backgroundColor: 'gray' }}>
            <ReactMarkdown>{commitData.readme}</ReactMarkdown>
          </div>
        </div>
      )}

      <FloatingButton onClick={props.onBackClick} />
    </div>
  );
};

export default Repository;
