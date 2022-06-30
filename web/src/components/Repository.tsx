import React from 'react';

interface RepositoryProps {
  title: string;
  description: string;
  language: string;
  forkCount: number;
}
const Repository = (props: RepositoryProps) => {
  return <div>Hello</div>;
};

export default Repository;
