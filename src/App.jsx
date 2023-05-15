import React, { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // const message ="TESTE OFICIAL!"
  const [tasks, SetTasks] = useState([
    // tasks são os valores guardado e SetTaks e estado atual
    // quando usamos state atualizamos o componente se fosse apenas um variavel não iriamos att o componente
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

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

  const handleTaskDelete = (taskId) => {
    const NewTasks = tasks.filter((task) => task.id !== taskId);

    SetTasks(NewTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDelete={handleTaskDelete}
              />
            </>
          )}
        />
      </div>
    </Router>
  );
};
export default App;
