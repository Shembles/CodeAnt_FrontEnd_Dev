import React from "react";
import { FiRefreshCw, FiPlus, FiSearch } from "react-icons/fi";
import "../styles/Header.css";

interface HeaderProps {
  title: string;
  totalRepositories: number;
  onRefresh: () => void;
  onAddRepository: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  totalRepositories,
  onRefresh,
  onAddRepository,
  onSearch,
}) => {
  return (
    <header className="header">
      <div className="headerTitle">
        <div className="headerTop">
          <h1>{title}</h1>
          <span className="totalRepositories">
            {totalRepositories} total repositories
          </span>
        </div>
        <div className="headerActions">
          <button className="refreshButton" onClick={onRefresh}>
            <span className="actionIcon">
              <FiRefreshCw />
            </span>
            Refresh All
          </button>
          <button className="addButton" onClick={onAddRepository}>
            <span className="actionIcon">
              <FiPlus />
            </span>
            Add Repository
          </button>
        </div>
      </div>
      <div className="searchContainer">
        <div className="searchInputWrapper">
          <span className="searchIcon">
            <FiSearch />
          </span>
          <input
            className="searchInput"
            type="text"
            placeholder="Search Repositories"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
