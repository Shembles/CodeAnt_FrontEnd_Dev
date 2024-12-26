import React from "react";
import RepositoryItem from "./RepositoryItem.tsx";
import "../styles/RepositoryList.css";

type Repository = {
  name: string;
  type: string;
  size: string;
  visibility: string;
  updated: string;
};

const repositories: Repository[] = [
  {
    name: "design-system",
    type: "React",
    size: "7320 KB",
    visibility: "Public",
    updated: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    type: "Javascript",
    size: "5871 KB",
    visibility: "Private",
    updated: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    type: "Python",
    size: "4521 KB",
    visibility: "Private",
    updated: "5 days ago",
  },
  {
    name: "mobile-app",
    type: "Swift",
    size: "3096 KB",
    visibility: "Public",
    updated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    type: "Java",
    size: "6210 KB",
    visibility: "Private",
    updated: "6 days ago",
  },
  {
    name: "blog-website",
    type: "HTML/CSS",
    size: "1876 KB",
    visibility: "Public",
    updated: "4 days ago",
  },
  {
    name: "social-network",
    type: "PHP",
    size: "5432 KB",
    visibility: "Private",
    updated: "7 days ago",
  },
];

const RepositoryList: React.FC = () => {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <RepositoryItem key={index} {...repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
