import React, { useMemo } from 'react';
import './TopCover.scss';

const TopCover = ({ title, subtitle, height=null }) => {
  const styles = useMemo(() => {
    const s = {};

    if (height !== null) {
      s.height = height;
    }

    return s;
  }, [height]);

  return (
    <div className="eqw-top-cover" style={styles}>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  );
};

export default TopCover;
