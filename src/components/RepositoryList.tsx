import React from "react";
import RepositoryItem from "./RepositoryItem.tsx";
import "../styles/RepositoryList.css";

interface Repository {
  name: string;
  type: string;
  size: string;
  visibility: string;
  updated: string;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="repositoryList">
      {repositories.map((repo: any, index: number) => (
        <RepositoryItem key={index} {...repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
