import React, { useState } from 'react';
import './App.css';

const EachTodo = ({ task, index, tasks, setTasks }) => {
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return <li>
    {task}
    <button className="delete-button" onClick={deleteTask}>
      Удалить
    </button>
  </li>
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };


  return (
    <div className="App">
      <h1>Простое To-Do Приложение</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Добавить новую задачу"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <EachTodo task={task} tasks={tasks} setTasks={setTasks} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
