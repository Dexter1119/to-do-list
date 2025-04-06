import React from "react";

const ImportantTasks = ({ tasks, toggleComplete, toggleImportant }) => {
  const importantTasks = tasks.filter((task) => task.important);

  return (
    <div className="important-task-section">
      <h2>Important Tasks</h2>
      {importantTasks.length > 0 ? (
        <ul className="important-task-list">
          {importantTasks.map((task) => (
            <li key={task.id} className="task-item">
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
      ) : (
        <p>No important tasks available.</p>
      )}
    </div>
  );
};

export default ImportantTasks;
