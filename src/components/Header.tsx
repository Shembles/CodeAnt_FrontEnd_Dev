import React from "react";
import { FiRefreshCw, FiPlus, FiSearch } from "react-icons/fi";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-title">
        <div className="header-top">
          <h1>Repositories</h1>
          <span className="total-repositories">33 total repositories</span>
        </div>
        <div className="header-actions">
          <button className="refresh-button">
            <span className="action-icon">
              <FiRefreshCw />
            </span>
            Refresh All
          </button>
          <button className="add-button">
            <span className="action-icon">
              <FiPlus />
            </span>
            Add Repository
          </button>
        </div>
      </div>
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">
            <FiSearch />
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search Repositories"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
