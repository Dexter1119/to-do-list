import React from "react";

const TaskSummary = ({ pending, completed }) => {
  return (
    <div className="task-summary">
      <h4>Today Tasks</h4>
      <p>{pending + completed}</p>
      <div className="task-chart">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${(completed / (pending + completed)) * 100}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="legend">
          <span>Pending</span>
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
