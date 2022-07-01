import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Repository.css';

interface RepositoryProps {
  commitUrl: string;
  fullName: string;
  onBackClick: any;
}

const Repository = (props: RepositoryProps) => {
  const [commitData, setCommitData] = useState<any>({});
  useEffect(() => {
    async function getCommits() {
      //example URL: //https://api.github.com/repos/silverorange/admin/commits{/sha}
      //lets remove the {/sha} with a regex

      const data: any = {};

      const response = await axios.get(props.commitUrl.replace(/\{.*\}/, ''));
      data.commit = response.data[0].commit;

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

  if (!commitData.hasOwnProperty('commit')) {
    return null;
  }
  return (
    <div className="repository">
      <div>{commitData.commit.author.name}</div>
      <div>{new Date(commitData.commit.author.date).toDateString()}</div>
      <div>{commitData.commit.message}</div>
      <div style={{ backgroundColor: 'gray' }}>
        <ReactMarkdown>{commitData.readme}</ReactMarkdown>
      </div>
      <button onClick={props.onBackClick}>Back</button>
    </div>
  );
};

export default Repository;
