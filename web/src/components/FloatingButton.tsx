import React from 'react';

interface FloatingButtonProps {
  onClick: any;
}

/**
 * Draws a floating arrow to return to the full repo list page. Text isn't exactly centered so it's shifted up a little
 * with the margin-bottom 10px.
 * @param props
 */
const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#333',
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
      <div style={{ marginBottom: '10px' }}>&#8592;</div>
    </div>
  );
};

export default FloatingButton;
