import React from "react";
import "./styles/Sidebar.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TodayTask from "./TodayTask";
import ProgressCircle from "./ProgressCircle"
import totalTasks from "./TodayTask"
import completedTasks from "./TodayTask"

const Sidebar = ({ setActiveView }) => {
  const profileName = "Hey, ABCD"; // Example profile name
  const profileImage = "/img.jpg"; // Replace with actual image

  // Progress bar values
  const totalTasks = 11;
  const completedTasks = 7;
  const percentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="sidebar">
      {/* Section 1: Profile Card */}
      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <p className="profile-name">{profileName}</p>
      </div>

      {/* Section 2: Navigation */}
      <div className="sidebar-nav">
        <button className="nav-item" onClick={() => setActiveView("All Tasks")}>
          <span>📋</span> All Tasks
        </button>
        <button className="nav-item" onClick={() => setActiveView(<TodayTask/>)}>
          <span>📅</span> Today
        </button>
        <button className="nav-item" onClick={() => setActiveView("Important")}>
          <span>⭐</span> Important
        </button>
        <button className="nav-item" onClick={() => setActiveView("Planned")}>
          <span>📘</span> Planned
        </button>
        <button
          className="nav-item"
          onClick={() => setActiveView("Assigned to Me")}
        >
          <span>👤</span> Assigned to Me
        </button>
      </div>

      {/* Section 3: Add List */}
      <div className="add-list">
        <button className="add-list-button">
          <span>➕</span> Add List
        </button>
      </div>

      {/* Section 4: Progress Bar */}
      {/* Progress Circle */}
      <ProgressCircle completedTasks={completedTasks} totalTasks={totalTasks} />
      </div>
    
  );
};

export default Sidebar;
