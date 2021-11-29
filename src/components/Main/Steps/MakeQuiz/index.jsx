import React, { useState, useCallback } from 'react';
import './MainQuiz.scss';
import InputText from '../../../InputText';
import ButtonGroup from '../../../ButtonGroup';
import QuizInputModal from '../../../QuizInputModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const createEmptyQuiz = () => ({
  question: '',
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
});

const MakeQuiz = ({ onBack, onLast }) => {
  const [quizes, setQuizes] = useState([]);
  const [quizModalData, setQuizModalData] = useState({
    selectedQuizIndex: -1,
    visible: false,
  });

  const handleModalOpen = useCallback(
    (index) => () => {
      setQuizModalData({
        selectedQuizIndex: index,
        visible: true,
      });
    },
    []
  );

  const handleModalClose = useCallback(() => {
    setQuizModalData({
      selectedQuizIndex: -1,
      visible: false,
    });
  }, []);

  const handleModalDataChange = useCallback(
    (selectedIndex) => (newData) => {
      const newQuizes = [...quizes];
      newQuizes[selectedIndex] = newData;

      setQuizes(newQuizes);
    },
    [quizes]
  );

  const handleQuizAdd = useCallback(() => {
    const newQuizes = quizes.concat(createEmptyQuiz());
    setQuizes(newQuizes);
  }, [quizes]);

  const handleQuizDelete = useCallback(
    (index) => () => {
      const newQuizes = [...quizes];
      newQuizes.splice(index, 1);
      setQuizes(newQuizes);
      handleModalClose();
    },
    [quizes]
  );

  const handleGroupButtonClick = useCallback(
    (idx) => {
      if (idx === 0 && onBack) onBack();
      else if (idx === 1 && onLast) onLast();
    },
    [onBack, onLast]
  );

  return (
    <div className="make-quiz-content">
      <QuizInputModal
        visible={quizModalData.visible}
        data={
          quizModalData.selectedQuizIndex >= 0
            ? quizes[quizModalData.selectedQuizIndex]
            : undefined
        }
        setData={handleModalDataChange(quizModalData.selectedQuizIndex)}
        onClose={handleModalClose}
        onDelete={handleQuizDelete(quizModalData.selectedQuizIndex)}
      />
      <section>
        <label>Title</label>
        <InputText />
      </section>
      <section>
        <label>Subtitle</label>
        <InputText />
      </section>
      <article>
        {quizes.map((_, quizIdx) => (
          <div role="button" key={quizIdx} onClick={handleModalOpen(quizIdx)}>
            Q{quizIdx + 1}
          </div>
        ))}
        <div role="button" onClick={handleQuizAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </article>
      <footer>
        <ButtonGroup
          btnText={['BACK', 'LAST']}
          onClick={handleGroupButtonClick}
        />
      </footer>
    </div>
  );
};

export default MakeQuiz;
