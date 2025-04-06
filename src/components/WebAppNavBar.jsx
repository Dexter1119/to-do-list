import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar Component


const WebAppNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
      height: "56px",
      backgroundColor: "#fbfdfc",
      borderBottom: "1px solid #e0e0e0",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1,
    },
    navbarLeft: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    menuIcon: {
      background: "none",
      border: "none",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      cursor: "pointer",
    },
    menuLine: {
      width: "20px",
      height: "2px",
      backgroundColor: "#3f9142", // Dark green for menu lines
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    logoIcon: {
      width: "32px",
      height: "32px",
      border: "2px solid #3f9142", // Dark green border
      borderRadius: "50%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    innerCircle: {
      width: "16px",
      height: "16px",
      backgroundColor: "#3f9142", // Dark green inner circle
      borderRadius: "50%",
    },
    logoText: {
      fontFamily: "Sen, sans-serif",
      fontSize: "24px",
      fontWeight: 700,
      color: "#3f9142", // Dark green text
    },
    navbarRight: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    icon: {
      background: "none",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
      color: "#1b281b", // Default text color
      transition: "color 0.3s",
    },
    iconHover: {
      color: "#3f9142", // Dark green on hover
    },
    sidebarOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
      transition: "opacity 0.3s ease",
      opacity: isSidebarOpen ? 1 : 0,
      pointerEvents: isSidebarOpen ? "all" : "none",
    },
  };

  return (
    <>
      {/* Sidebar */}
      <div style={styles.sidebarOverlay} onClick={toggleSidebar}></div>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Navbar */}
      <nav style={styles.navbar}>
        {/* Left Section: Hamburger and Logo */}
        <div style={styles.navbarLeft}>
          <button style={styles.menuIcon} onClick={toggleSidebar}>
            <span style={styles.menuLine}></span>
            <span style={styles.menuLine}></span>
            <span style={styles.menuLine}></span>
          </button>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <div style={styles.innerCircle}></div>
            </div>
            <span style={styles.logoText}>DoIt</span>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div style={styles.navbarRight}>
          <button
            style={styles.icon}
            onMouseEnter={(e) => (e.target.style.color = styles.iconHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.icon.color)}
          >
            🔍
          </button>
          <button
            style={styles.icon}
            onMouseEnter={(e) => (e.target.style.color = styles.iconHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.icon.color)}
          >
            ⛓
          </button>
          <button
            style={styles.icon}
            onMouseEnter={(e) => (e.target.style.color = styles.iconHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.icon.color)}
          >
            🌙
          </button>
        </div>
      </nav>
    </>
  );
};

export default WebAppNavBar;
