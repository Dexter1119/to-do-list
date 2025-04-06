import React, { useState } from "react";
import WebAppNavBar from "../components/WebAppNavBar";
import TaskApp from "../components/TodayTask";
import "./TodoDashboard.css";

const TodoDashboard = () => {
  const [activeView, setActiveView] = useState("Today Task");

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <WebAppNavBar />

      {/* Main Dashboard Area */}
      <div className="dashboard-content">
        
        {/* Active View Content */}
        <div className="dashboard-view">
          {activeView === "Today Task" && <TaskApp />}
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
