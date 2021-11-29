import React, { useState, useMemo } from 'react';
import './Main.scss';
import TopCover from '../TopCover';
import EntryStep from './Steps/Entry';
import Guide from './Steps/Guide';
import MakeQuiz from './Steps/MakeQuiz';

const Main = () => {
  const [step, setStep] = useState('ENTRY');
  const content = useMemo(() => {
    switch (step) {
      case 'ENTRY':
        return (
          <EntryStep
            onMakeQuiz={() => {
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
      default:
        return null;
    }
  }, [step]);

  return (
    <div className="start-page">
      {topCover}
      {content}
    </div>
  );
};

export default Main;
