import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetail from './components/TaskDetails';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // const message ="TESTE OFICIAL!"
  const [tasks, SetTasks] = useState([]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    SetTasks(newTasks);
  };
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      SetTasks(data);
    };
    fetchTasks();
  }, []);

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
        <Route path="/:tasktitle" exact component={TaskDetail} />
      </div>
    </Router>
  );
};
export default App;
