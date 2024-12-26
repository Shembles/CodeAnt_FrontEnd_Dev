import React from "react";
import { FiCircle, FiDatabase } from "react-icons/fi";
import "../styles/RepositoryItem.css";

type Props = {
  name: string;
  type: string;
  size: string;
  visibility: string;
  updated: string;
};

const RepositoryItem: React.FC<Props> = ({
  name,
  type,
  size,
  visibility,
  updated,
}) => {
  return (
    <div className="repository-item">
      <div className="repository-header">
        <h2>{name}</h2>
        <span className={`visibility ${visibility.toLowerCase()}`}>
          {visibility}
        </span>
      </div>
      <div className="repository-details">
        <span>
          {type}
          <span className="detail-icon dot">
            <FiCircle />
          </span>
        </span>
        <span>
          <span className="detail-icon">
            <FiDatabase />
          </span>
          {size}
        </span>
        <span>
          Updated {updated}
        </span>
      </div>
    </div>
  );
};

export default RepositoryItem;
