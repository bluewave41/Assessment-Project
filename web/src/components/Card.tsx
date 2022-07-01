import React from 'react';
import './Card.css';

const Card = (props: any) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <span>{props.language}</span>
        <span>{props.forkCount}</span>
      </div>
    </div>
  );
};

export default Card;
