import React, { useCallback } from 'react';
import './ButtonGroup.scss';

const ButtonGroup = ({ btnText = [], onClick }) => {
  const handleClick = useCallback(
    (idx) => (e) => {
      if (!onClick) return;
      onClick(idx, e);
    },
    [onClick]
  );

  return (
    <div className="button-group">
      {btnText.map((text, textIdx) => (
        <button type="button" key={textIdx} onClick={handleClick(textIdx)}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
