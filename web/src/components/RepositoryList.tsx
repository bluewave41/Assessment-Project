import React from 'react';
import './RepositoryList.css';

interface RepositoryListProps {
  title: string;
  description: string;
  language: string;
  forkCount: number;
  onRepoClick: any;
}
const RepositoryList = (props: RepositoryListProps) => {
  return (
    <div>
      <div className="link" onClick={() => props.onRepoClick(props.title)}>
        {props.title}
      </div>
      <div>{props.description}</div>
      <div>{props.language}</div>
      <div>{props.forkCount}</div>
    </div>
  );
};

export default RepositoryList;
