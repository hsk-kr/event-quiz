import React from 'react';
import './Entry.scss';
import Button from '../../../Button';

const Entry = ({ onHowToUse }) => {
  return (
    <div className="entry-content">
      <Button>MAKE YOUR OWN QUIZ</Button>
      <Button onClick={onHowToUse}>HOW TO USE</Button>
    </div>
  );
};

export default Entry;
