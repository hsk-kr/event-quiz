import React, { useCallback } from 'react';
import './InputText.scss';

const InputText = ({ type = 'text', onChange, value, maxLength = 65535 }) => {
  const handleChange = useCallback(
    (e) => {
      if (!onChange || e.target.value.length > maxLength) {
        return;
      }

      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <input
      type={type}
      className="input-text"
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputText;
