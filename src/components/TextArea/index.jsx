import React, { useCallback } from 'react';
import './TextArea.scss';

const TextArea = ({ onChange, value, maxLength = 65535 }) => {
  const handleTextChange = useCallback(
    (e) => {
      if (!onChange || e.target.value.length > maxLength) {
        return;
      }

      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <textarea
      className="text-area"
      onChange={handleTextChange}
      value={value}
    ></textarea>
  );
};

export default TextArea;
