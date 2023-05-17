import React from 'react';
import './TaskDetails.css';

import { useParams, useHistory } from 'react-router-dom';

import Button from './Buttom';

const TaskDetail = () => {
  const params = useParams();
  const history = useHistory();

  const HandleBackButtinClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="task-details-container">
        <h2>{params.tasktitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem
          dicta ullam sequi labore delectus!
        </p>
      </div>
      <Button className="Back-buttom-Details" onClick={HandleBackButtinClick}>
        Voltar
      </Button>
    </>
  );
};

export default TaskDetail;
