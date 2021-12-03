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
      {btnText.map((val, textIdx) => {
        let text = '';
        let disabled = false;

        if (typeof val === 'object') {
          text = val.text;
          disabled = val.disabled;
        } else {
          text = val;
        }

        return (
          <button
            type="button"
            className={disabled ? 'disabled' : ''}
            key={textIdx}
            onClick={disabled ? undefined : handleClick(textIdx)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
