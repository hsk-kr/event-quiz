import React, { useContext } from 'react';
import './TheEnd.scss';
import { QuizContext } from '../../../../context/QuizContext';
import ButtonGroup from '../../../ButtonGroup';

const TheEnd = ({ onRestart }) => {
  const { message, picObjUrl } = useContext(QuizContext);

  return (
    <div className="the-end-content">
      {picObjUrl && <img src={picObjUrl} alt="event" className="event-pic" />}
      {message && <span className="event-msg">{message}</span>}
      <footer>
        <ButtonGroup btnText={['RESTART']} onClick={onRestart} />
      </footer>
    </div>
  );
};

export default TheEnd;
