import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Don't add empty tasks

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    setTasks([...tasks, newTask]); // Add new task to the array
    setInputValue(""); // Clear input field
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks); // Remove the task with the matching ID
  };

  return (
    <div className="app-wrapper">
      <div className="todo-card">
        <h1>Task Manager</h1>
        
        <form onSubmit={addTask} className="input-section">
          <input 
            type="text" 
            placeholder="What needs to be done?" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="add-btn">Add Task</button>
        </form>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-msg">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <span>{task.text}</span>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;