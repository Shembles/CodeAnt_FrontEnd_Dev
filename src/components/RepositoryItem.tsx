import React from "react";
import { FiCircle, FiDatabase } from "react-icons/fi";
import "../styles/RepositoryItem.css";

interface RepositoryItemProps {
  name: string;
  type: string;
  size: string;
  visibility: string;
  updated: string;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  name,
  type,
  size,
  visibility,
  updated,
}) => {
  return (
    <div className="repositoryItem">
      <div className="repositoryHeader">
        <h2>{name}</h2>
        <span className="visibility">
          {visibility}
        </span>
      </div>
      <div className="repositoryDetails">
        <span>
          {type}
          <span className="detailIcon dot">
            <FiCircle />
          </span>
        </span>
        <span>
          <span className="detailIcon">
            <FiDatabase />
          </span>
          {size}
        </span>
        <span>Updated {updated}</span>
      </div>
    </div>
  );
};

export default RepositoryItem;
