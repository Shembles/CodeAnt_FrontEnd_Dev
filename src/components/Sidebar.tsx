import React, { useState } from "react";
import {
  FiHome,
  FiCode,
  FiCloud,
  FiBook,
  FiSettings,
  FiLogOut,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "../styles/Sidebar.css";
import logo from "../assets/CodeAnt_logo.png"; // Import the logo image

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Repositories");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button className="burger-button" onClick={toggleSidebar}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <select className="user-select">
          <option>UtkarshDhairyaPathak</option>
        </select>
        <ul className="menu-list">
          <li
            className={activeItem === "Repositories" ? "active" : ""}
            onClick={() => setActiveItem("Repositories")}
          >
            <span className="menu-icon">
              <FiHome />
            </span>
            Repositories
          </li>
          <li
            className={activeItem === "AI Code Review" ? "active" : ""}
            onClick={() => setActiveItem("AI Code Review")}
          >
            <span className="menu-icon">
              <FiCode />
            </span>
            AI Code Review
          </li>
          <li
            className={activeItem === "Cloud Security" ? "active" : ""}
            onClick={() => setActiveItem("Cloud Security")}
          >
            <span className="menu-icon">
              <FiCloud />
            </span>
            Cloud Security
          </li>
          <li
            className={activeItem === "How to Use" ? "active" : ""}
            onClick={() => setActiveItem("How to Use")}
          >
            <span className="menu-icon">
              <FiBook />
            </span>
            How to Use
          </li>
          <li
            className={activeItem === "Settings" ? "active" : ""}
            onClick={() => setActiveItem("Settings")}
          >
            <span className="menu-icon">
              <FiSettings />
            </span>
            Settings
          </li>
        </ul>
        <div className="sidebar-footer">
          <p
            className={activeItem === "Support" ? "active" : ""}
            onClick={() => setActiveItem("Support")}
          >
            <span className="menu-icon">
              <FiPhone />
            </span>
            Support
          </p>
          <p>
            <span className="menu-icon">
              <FiLogOut />
            </span>
            Logout
          </p>
        </div>
      </nav>
      <div className="overlay"></div>
    </>
  );
};

export default Sidebar;
