import React from 'react';
import './Guide.scss';
import ButtonGroup from '../../../ButtonGroup';

const Guide = ({ onBack }) => {
  return (
    <div className="guide">
      <span>
        All questions you make are fake questions for your last message.
      </span>
      <ul>
        <li>Click 'Make your own quiz' button</li>
        <li>Enter title and subtitle</li>
        <li>Make fake questions as much as you want with add button</li>
        <li>If you make them enough, Click the last button</li>
        <li>
          Set a picture and a message for your "FRIEND". It's going to show in
          the last page.
        </li>
      </ul>
      <footer>
        <ButtonGroup btnText={['BACK']} onClick={onBack} />
      </footer>
    </div>
  );
};

export default Guide;
