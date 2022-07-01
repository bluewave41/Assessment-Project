import React from 'react';
import './RepositoryList.css';

interface RepositoryListProps {
  title: string;
  description: string;
  language: string;
  forkCount: number;
  avatar: string;
  onRepoClick: any;
}
const RepositoryList = (props: RepositoryListProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '10px',
      }}
    >
      <span className="link" onClick={() => props.onRepoClick(props.title)}>
        {props.title}
      </span>
      <div>Description: {props.description}</div>
      <div>Language: {props.language}</div>
      <div>Forks count: {props.forkCount}</div>
    </div>
  );
};

export default RepositoryList;
