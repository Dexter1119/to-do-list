import React, { useState } from "react";
import ImportantTasks from "./ImportantTasks";
import ProgressCircle from "./ProgressCircle";
import "./styles/TodayTask.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, important: false },
    { id: 2, text: "Finish project report", completed: false, important: true },
    { id: 3, text: "Call the bank", completed: false, important: false },
    { id: 4, text: "Schedule dentist appointment", completed: false, important: false },
    { id: 5, text: "Plan weekend trip", completed: false, important: false },
    { id: 6, text: "Read e-book", completed: true, important: false },
    { id: 7, text: "Clean the house", completed: true, important: false },
    { id: 8, text: "Prepare presentation", completed: true, important: false },
    { id: 9, text: "Update blog", completed: true, important: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Calculate total and completed tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        { id: Date.now(), text: newTask, completed: false, important: false },
        ...tasks,
      ]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks
        .map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
        .sort((a, b) => a.completed - b.completed) // Move completed tasks to the bottom
    );
  };

  const toggleImportant = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  return (
    <div className="task-app">
      {/* Add Task Section */}
      <div className="add-task-section">
        <input
          type="text"
          placeholder="Add A Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-button" onClick={addTask}>
          ADD TASK
        </button>
      </div>

      
      {/* Important Tasks */}
      <ImportantTasks
        tasks={tasks}
        toggleComplete={toggleComplete}
        toggleImportant={toggleImportant}
      />

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span className="task-text">{task.text}</span>
            </label>
            <button
              className={`star-button ${task.important ? "important" : ""}`}
              onClick={() => toggleImportant(task.id)}
            >
              ★
            </button>
          </li>
        ))}
      </ul>


      {/* Progress Circle */}
      <ProgressCircle completedTasks={completedTasks} totalTasks={totalTasks} />

    </div>
  );
};



export default TaskApp;
