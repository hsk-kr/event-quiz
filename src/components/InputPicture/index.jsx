import React, { useCallback, useRef } from 'react';
import './InputPicture.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const InputPicture = ({ value, onChange }) => {
  const fileRef = useRef();

  const forwardToFileChange = useCallback(() => {
    if (!fileRef.current?.click) return;
    fileRef.current.click();
  }, []);

  const handleFileChange = useCallback(
    (e) => {
      if (!onChange || e.target.files.length === 0) return;

      const file = e.target.files[0];
      const imgUrl = URL.createObjectURL(file);

      e.target.value = '';
      onChange(imgUrl);
    },
    [onChange]
  );

  return (
    <div className="input-picture">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileRef}
      />
      {value ? (
        <img src={value} alt="preview" onClick={forwardToFileChange} />
      ) : (
        <div
          className="edit-button"
          role="button"
          onClick={forwardToFileChange}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      )}
    </div>
  );
};

export default InputPicture;
