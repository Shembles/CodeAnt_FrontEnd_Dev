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
import logo from "../assets/CodeAnt_logo.png";

interface SidebarProps {
  user: string;
  onLogout: () => void;
  onMenuItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, onLogout, onMenuItemClick }) => {
  const [activeItem, setActiveItem] = useState<string>("Repositories");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
    onMenuItemClick(item);
  };

  return (
    <>
      <div className="mobileNavbar">
        <img src={logo} alt="Logo" className="navbarLogo" />
        <button className="burgerButton" onClick={toggleSidebar}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <img src={logo} alt="Logo" className="sidebarLogo" />
        <select className="userSelect">
          <option>{user}</option>
        </select>
        <ul className="menuList">
          <li
            className={activeItem === "Repositories" ? "active" : ""}
            onClick={() => handleMenuItemClick("Repositories")}
          >
            <span className="menuIcon">
              <FiHome />
            </span>
            Repositories
          </li>
          <li
            className={activeItem === "AI Code Review" ? "active" : ""}
            onClick={() => handleMenuItemClick("AI Code Review")}
          >
            <span className="menuIcon">
              <FiCode />
            </span>
            AI Code Review
          </li>
          <li
            className={activeItem === "Cloud Security" ? "active" : ""}
            onClick={() => handleMenuItemClick("Cloud Security")}
          >
            <span className="menuIcon">
              <FiCloud />
            </span>
            Cloud Security
          </li>
          <li
            className={activeItem === "How to Use" ? "active" : ""}
            onClick={() => handleMenuItemClick("How to Use")}
          >
            <span className="menuIcon">
              <FiBook />
            </span>
            How to Use
          </li>
          <li
            className={activeItem === "Settings" ? "active" : ""}
            onClick={() => handleMenuItemClick("Settings")}
          >
            <span className="menuIcon">
              <FiSettings />
            </span>
            Settings
          </li>
        </ul>
        <div className="sidebarFooter">
          <p
            className={activeItem === "Support" ? "active" : ""}
            onClick={() => handleMenuItemClick("Support")}
          >
            <span className="menuIcon">
              <FiPhone />
            </span>
            Support
          </p>
          <p onClick={onLogout}>
            <span className="menuIcon">
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
