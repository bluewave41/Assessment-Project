import React from 'react';

interface RepositoryProps {
  title: string;
  description: string;
  language: string;
  forkCount: number;
}
const Repository = (props: RepositoryProps) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.language}</div>
      <div>{props.forkCount}</div>
    </div>
  );
};

export default Repository;
