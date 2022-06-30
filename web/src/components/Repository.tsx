import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface RepositoryProps {
  commitUrl: string;
  fullName: string;
}

const Repository = (props: RepositoryProps) => {
  const [commitData, setCommitData] = useState<any>({});
  console.log(commitData);
  useEffect(() => {
    async function getCommits() {
      console.log('ran');
      //example URL: //https://api.github.com/repos/silverorange/admin/commits{/sha}
      //lets remove the {/sha} with a regex
      const response = await axios.get(props.commitUrl.replace(/\{.*\}/, ''));
      const readmeResponse = await axios.get(
        `https://raw.githubusercontent.com/${props.fullName}/master/README.md`
      );
      setCommitData({
        commit: response.data[0].commit,
        readme: readmeResponse.data,
      });
    }
    getCommits();
  }, [props.commitUrl, props.fullName]);

  if (!commitData.hasOwnProperty('commit')) {
    return null;
  }
  return (
    <div>
      <div>{commitData.commit.author.name}</div>
      <div>{new Date(commitData.commit.author.date).toDateString()}</div>
      <div>{commitData.commit.message}</div>
      <ReactMarkdown>{commitData.readme}</ReactMarkdown>
    </div>
  );
};

export default Repository;
