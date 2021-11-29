import React, { useCallback } from 'react';
import './QuizInputModal.scss';
import ButtonGroup from '../ButtonGroup';
import InputText from '../InputText';
import TextArea from '../TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const QuizInputModal = ({ visible, onClose, data, setData, onDelete }) => {
  const handleDataChange = useCallback(
    (propName) => (text) => {
      if (!setData) return;

      setData({
        ...data,
        [propName]: text,
      });
    },
    [data, setData]
  );

  if (!visible) return null;

  return (
    <div className="quiz-input-modal">
      <main>
        <div role="button" className="close-btn">
          <FontAwesomeIcon icon={faTimes} onClick={onClose} />
        </div>
        <div className="content">
          <div className="row">
            <label>Question</label>
            <TextArea
              onChange={handleDataChange('question')}
              value={data.question}
              maxLength={50}
            />
          </div>
          <div className="row">
            <label>Answer 1</label>
            <InputText
              onChange={handleDataChange('answer1')}
              value={data.answer1}
              maxLength={20}
            />
          </div>
          <div className="row">
            <label>Answer 2</label>
            <InputText
              onChange={handleDataChange('answer2')}
              value={data.answer2}
              maxLength={20}
            />
          </div>
          <div className="row">
            <label>Answer 3</label>
            <InputText
              onChange={handleDataChange('answer3')}
              value={data.answer3}
              maxLength={20}
            />
          </div>
          <div className="row">
            <label>Answer 4</label>
            <InputText
              onChange={handleDataChange('answer4')}
              value={data.answer4}
              maxLength={20}
            />
          </div>
        </div>
        <footer>
          <ButtonGroup btnText={['DELETE']} onClick={onDelete} />
        </footer>
      </main>
    </div>
  );
};

export default QuizInputModal;
