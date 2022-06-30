import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface RepositoryProps {
  commitUrl: string;
}

const Repository = (props: RepositoryProps) => {
  const [commitData, setCommitData] = useState<any>({});
  console.log(commitData.author);
  useEffect(() => {
    async function getCommits() {
      //example URL: //https://api.github.com/repos/silverorange/admin/commits{/sha}
      //lets remove the {/sha} with a regex
      const response = await axios.get(props.commitUrl.replace(/\{.*\}/, ''));
      setCommitData(response.data[0]);
    }
    getCommits();
  }, [props.commitUrl]);

  if (!commitData.hasOwnProperty('commit')) {
    return null;
  }
  return (
    <div>
      <div>{commitData.commit.author.name}</div>
      <div>{new Date(commitData.commit.author.date).toDateString()}</div>
      <div>{commitData.commit.message}</div>
    </div>
  );
};

export default Repository;
