import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // const message ="TESTE OFICIAL!"
  const [tasks, SetTasks] = useState([
    // tasks são os valores guardado e SetTaks e estado atual
    // quando usamos state atualizamos o componente se fosse apenas um variavel não iriamos att o componente
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true,
    },
    {
      id: '3',
      title: 'ler livros',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };

      return task;
    });
    SetTasks(newTasks);
  };

  const handleTaskAddition = (tasktitle) => {
    const NewTasks = [
      ...tasks,
      {
        title: tasktitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    SetTasks(NewTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </>
  );
};
export default App;
