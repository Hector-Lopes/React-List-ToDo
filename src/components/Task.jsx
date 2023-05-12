import React from 'react';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg';

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="see-tas-button">
          <CgInfo></CgInfo>
        </button>
        <button
          className="remove-tas-button"
          onClick={() => handleTaskDelete(task.id)}
        >
          <CgClose></CgClose>
        </button>
      </div>
    </div>
  );
};

export default Task;
