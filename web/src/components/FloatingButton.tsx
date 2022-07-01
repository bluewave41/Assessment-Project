import React from 'react';

interface FloatingButtonProps {
  onClick: any;
}

const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'gray',
        fontSize: '64px',
        borderRadius: '50%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        left: 10,
        cursor: 'pointer',
      }}
      onClick={props.onClick}
    >
      &#8592;
    </div>
  );
};

export default FloatingButton;
