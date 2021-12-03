import React, { useState, useCallback, useEffect, useContext } from 'react';
import './Last.scss';
import { QuizContext } from '../../../../context/QuizContext';
import ButtonGroup from '../../../ButtonGroup';
import InputText from '../../../InputText';
import InputPicture from '../../../InputPicture';

const Last = ({ onBack, onStart }) => {
  const [message, setMessage] = useState('');
  const [picObjUrl, setPicObjUrl] = useState('');
  const {
    message: messageInContext,
    picObjUrl: picObjUrlInContext,
    setMessage: setMessageInContext,
    setPicObjUrl: setPicObjUrlInContext,
  } = useContext(QuizContext);
  const handleStart = useCallback(() => {
    setMessageInContext(message);
    setPicObjUrlInContext(picObjUrl);
    ``;
    onStart();
  }, [onStart, message, picObjUrl]);

  const handleImageChange = useCallback((imgUrl) => {
    setPicObjUrl(imgUrl);
  }, []);

  const handleGroupButtonClick = useCallback(
    (idx) => {
      if (idx === 0 && onBack) onBack();
      else if (idx === 1 && handleStart) handleStart();
    },
    [onBack, handleStart]
  );

  const loadContext = () => {
    setMessage(messageInContext);
    setPicObjUrl(picObjUrlInContext);
  };

  useEffect(loadContext, []);

  return (
    <div className="last-content">
      <section>
        <label>Message</label>
        <InputText
          value={message}
          onChange={(text) => setMessage(text)}
          maxLength={128}
        />
      </section>
      <section>
        <label>Picture</label>
        <InputPicture value={picObjUrl} onChange={handleImageChange} />
      </section>
      <footer>
        <ButtonGroup
          btnText={['BACK', 'START']}
          onClick={handleGroupButtonClick}
        />
      </footer>
    </div>
  );
};

export default Last;
