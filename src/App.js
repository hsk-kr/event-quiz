import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import { QuizContextProvider } from './context/QuizContext';

// Pages
import Main from './components/Main';

const App = () => {
  return (
    <QuizContextProvider>
      <Main />
    </QuizContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
