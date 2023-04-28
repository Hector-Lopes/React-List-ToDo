import React, { useState } from 'react';

import './AddTask.css';
import Button from './Buttom.jsx';

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  };
  return (
    <div className="add-tas-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      ;
      <div className="add-task-button-container" onClick={handleAddTaskClick}>
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
