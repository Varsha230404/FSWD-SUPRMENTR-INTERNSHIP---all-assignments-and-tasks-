import { useState } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();

    const trimmedTask = taskInput.trim();
    if (!trimmedTask) {
      return;
    }

    setTasks((previousTasks) => [...previousTasks, trimmedTask]);
    setTaskInput('');
  };

  const handleDeleteTask = (taskIndex) => {
    setTasks((previousTasks) =>
      previousTasks.filter((_, index) => index !== taskIndex)
    );
  };

  return (
    <div className="App">
      <h1>Dynamic List App</h1>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={`${task}-${index}`}>
            <span>{task}</span>
            <button type="button" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
