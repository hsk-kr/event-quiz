import React, { useState, useMemo, useContext, useCallback } from 'react';
import './Main.scss';
import { QuizContext } from '../../context/QuizContext';
import TopCover from '../TopCover';
import EntryStep from './Steps/Entry';
import Guide from './Steps/Guide';
import MakeQuiz from './Steps/MakeQuiz';
import Last from './Steps/Last';
import QuizEntry from './Steps/QuizEntry';
import QuizQuestions from './Steps/QuizQuestions';
import TheEnd from './Steps/TheEnd';

const Main = () => {
  const [step, setStep] = useState('ENTRY');
  const {
    setQuizes,
    quizTitle,
    setQuizTitle,
    quizSubtitle,
    setQuizSubtitle,
    setMessage,
    setPicObjUrl,
  } = useContext(QuizContext);

  const clearQuizContext = useCallback(() => {
    setQuizes([]);
    setQuizTitle('');
    setQuizSubtitle('');
    setMessage('');
    setPicObjUrl('');
  }, []);

  const content = useMemo(() => {
    switch (step) {
      case 'ENTRY':
        return (
          <EntryStep
            onMakeQuiz={() => {
              clearQuizContext();
              setStep('MAKE_QUIZ');
            }}
            onHowToUse={() => {
              setStep('GUIDE');
            }}
          />
        );
      case 'GUIDE':
        return (
          <Guide
            onBack={() => {
              setStep('ENTRY');
            }}
          />
        );
      case 'MAKE_QUIZ':
        return (
          <MakeQuiz
            onBack={() => {
              setStep('ENTRY');
            }}
            onLast={() => {
              setStep('LAST');
            }}
          />
        );
      case 'LAST':
        return (
          <Last
            onBack={() => {
              setStep('MAKE_QUIZ');
            }}
            onStart={() => {
              setStep('QUIZ_ENTRY');
            }}
          />
        );
      case 'QUIZ_ENTRY':
        return (
          <QuizEntry
            onStart={() => {
              setStep('QUIZ_QUESTIONS');
            }}
          />
        );
      case 'QUIZ_QUESTIONS':
        return (
          <QuizQuestions
            onFinish={() => {
              setStep('THE_END');
            }}
          />
        );
      case 'THE_END':
        return (
          <TheEnd
            onRestart={() => {
              setStep('QUIZ_ENTRY');
            }}
          />
        );
      default:
        return null;
    }
  }, [step]);
  const topCover = useMemo(() => {
    switch (step) {
      case 'ENTRY':
        return <TopCover title="EVENT QUIZ" subtitle="❤️Jeeo" />;
      case 'GUIDE':
        return <TopCover title="HOW TO USE" height={'40%'} />;
      case 'MAKE_QUIZ':
        return <TopCover title="MAKE QUIZ" height={'40%'} />;
      case 'LAST':
        return <TopCover title="LAST" subtitle="For your" height={'40%'} />;
      case 'QUIZ_ENTRY':
        return <TopCover title={quizTitle} subtitle={quizSubtitle} />;
      case 'QUIZ_QUESTIONS':
        return (
          <TopCover title={quizTitle} subtitle={quizSubtitle} height={'40%'} />
        );
      case 'THE_END':
        return <TopCover />;
      default:
        return null;
    }
  }, [step, quizTitle, quizSubtitle]);

  return (
    <div className="start-page">
      {topCover}
      {content}
    </div>
  );
};

export default Main;
