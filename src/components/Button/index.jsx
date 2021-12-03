import React, { useMemo } from 'react';
import './Button.scss';

const Button = ({ children, onClick, color = 'default', checked = false }) => {
  const className = useMemo(() => {
    let name = 'eqw-button ';

    if (checked) {
      name += 'checked';
    } else {
      switch (color) {
        default:
          name += 'default';
      }
    }

    return name;
  }, [color, checked]);

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
