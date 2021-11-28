import React, { useState, useMemo } from 'react';
import './Main.scss';
import TopCover from '../TopCover';
import EntryStep from './Steps/Entry';
import Guide from './Steps/Guide';

const Main = () => {
  const [step, setStep] = useState('ENTRY');
  const content = useMemo(() => {
    switch (step) {
      case 'ENTRY':
        return (
          <EntryStep
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
      default:
        return null;
    }
  }, [step]);
  const topCover = useMemo(() => {
    switch (step) {
      case 'ENTRY':
        return <TopCover title="Event Quiz" subtitle="❤️Jeeo" />;
      case 'GUIDE':
        return <TopCover title="HOW TO USE" height={'40%'} />;
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
