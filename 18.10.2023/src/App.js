import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeItemFromTodo } from './featrues/action'
import './App.css';

const EachTodo = ({ task, index }) => {
  const dispatch = useDispatch()
  const deleteTask = () => {
    dispatch(removeItemFromTodo(index))
  };

  return <li>
    {task}
    <button className="delete-button" onClick={deleteTask}>
      Удалить
    </button>
  </li>
}

function App() {
  const {todos} = useSelector(state=>state)
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTodo(newTask))
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
        {todos?.map((task, index) => (
          <EachTodo task={task} key={index} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
