import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ completedTasks, totalTasks }) => {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="progress-section">
      <style>
        {`
          .progress-section {
            text-align: center;
            margin: 0 auto 10px;
            width: 100px; /* Adjust circle size */
          }

          .progress-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
          }

          .progress-legend {
            display: flex;
            justify-content: center;
            margin-top: 5px;
            gap: 10px;
          }

          .legend-item {
            font-size: 12px;
            color: #666;
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .legend-color {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }

          .legend-color.green {
            background-color: #3f9142;
          }

          .legend-color.dark-green {
            background-color: #6ac46a;
          }
        `}
      </style>
      <p className="progress-title">Today Tasks</p>
      <CircularProgressbar
        value={percentage}
        text={`${completedTasks}/${totalTasks}`}
        styles={buildStyles({
          pathColor: "#3f9142",
          textColor: "#3f9142",
          trailColor: "#d6d6d6",
          backgroundColor: "#f8f8f8",
        })}
      />
      <div className="progress-legend">
        <span className="legend-item">
          <span className="legend-color green"></span> Done
        </span>
        <span className="legend-item">
          <span className="legend-color dark-green"></span> Pending
        </span>
      </div>
    </div>
  );
};

export default ProgressCircle;
