import React from 'react';
import './QuizEntry.scss';
import Button from '../../../Button';

const QuizEntry = ({ onStart }) => {
  return (
    <div className="quiz-entry-content">
      <Button onClick={onStart}>START QUIZ</Button>
    </div>
  );
};

export default QuizEntry;
