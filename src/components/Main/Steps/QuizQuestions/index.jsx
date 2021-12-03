import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import './QuizQuestions.scss';
import { QuizContext } from '../../../../context/QuizContext';
import Button from '../../../Button';
import ButtonGroup from '../../../ButtonGroup';

const QuizQuestions = ({ onFinish }) => {
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedBtnNum, setSelectedBtnNum] = useState(undefined);
  const { quizes } = useContext(QuizContext);
  const btnText = useMemo(() => {
    return [
      {
        text: 'PREV QES',
        disabled: quizIdx <= 0,
      },
      {
        text: quizIdx + 1 === quizes.length ? 'END QUIZ' : 'NEXT QES',
        disabled: selectedBtnNum === undefined,
      },
    ];
  }, [quizIdx, selectedBtnNum]);

  const handleGroupButtonClick = useCallback(
    (idx) => {
      if (idx === 0) setQuizIdx(quizIdx - 1);
      else if (idx === 1 && selectedBtnNum >= 0) {
        if (quizIdx + 1 === quizes.length) {
          if (onFinish) onFinish();
        } else {
          setSelectedBtnNum(undefined);
          setQuizIdx(quizIdx + 1);
        }
      }
    },
    [quizIdx, selectedBtnNum]
  );

  const handleAnswerButtonClick = useCallback(
    (num) => () => {
      setSelectedBtnNum(num);
    },
    []
  );

  if (quizIdx >= quizes.length) return null;

  return (
    <div className="quiz-questions-content">
      <article>
        <h2>
          Q. {quizIdx + 1} / {quizes.length}
        </h2>
        <p>{quizes[quizIdx].question}</p>
      </article>
      <main>
        {[1, 2, 3, 4].map((num) =>
          quizes[quizIdx][`answer${num}`] ? (
            <Button
              key={num}
              onClick={handleAnswerButtonClick(num)}
              checked={selectedBtnNum === num}
            >
              {quizes[quizIdx][`answer${num}`]}
            </Button>
          ) : null
        )}
      </main>
      <footer>
        <ButtonGroup btnText={btnText} onClick={handleGroupButtonClick} />
      </footer>
    </div>
  );
};

export default QuizQuestions;
