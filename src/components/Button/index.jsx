import React, { useMemo } from 'react';
import './Button.scss';

const Button = ({ children, onClick, color = 'default' }) => {
  const className = useMemo(() => {
    let name = 'eqw-button ';

    switch (color) {
      default:
        name += 'default';
    }

    return name;
  }, [color]);

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
