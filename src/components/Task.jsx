import React from 'react';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  const history = useHistory();

  const HandleTaskDetailsClik = () => {
    history.push(`/${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-tas-button"
          onClick={() => handleTaskDelete(task.id)}
        >
          <CgClose></CgClose>
        </button>
        <button className="see-tas-button" onClick={HandleTaskDetailsClik}>
          <CgInfo></CgInfo>
        </button>
      </div>
    </div>
  );
};

export default Task;
