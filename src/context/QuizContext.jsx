import React, { useState } from 'react';

export const QuizContext = React.createContext();

export const QuizContextProvider = ({ children }) => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizSubtitle, setQuizSubtitle] = useState('');
  const [quizes, setQuizes] = useState([]);
  const [message, setMessage] = useState('');
  const [picObjUrl, setPicObjUrl] = useState('');

  return (
    <QuizContext.Provider
      value={{
        quizes,
        setQuizes,
        quizTitle,
        setQuizTitle,
        quizSubtitle,
        setQuizSubtitle,
        message,
        setMessage,
        picObjUrl,
        setPicObjUrl,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default {};
