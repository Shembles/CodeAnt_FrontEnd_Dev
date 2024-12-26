import React from "react";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import RepositoryList from "./components/RepositoryList.tsx";
import "./styles/App.css";

const RepositoryLayout: React.FC = () => {
  const handleRefresh = () => {
    // Refresh logic here
  };

  const handleAddRepository = () => {
    // Add repository logic here
  };

  const handleSearch = (query: string) => {
    // Search logic here
  };

  const handleMenuItemClick = (item: string) => {
    // Menu item click logic here
  };

  const handleLogout = () => {
    // Logout logic here
  };

  const repositories = [
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

  return (
    <div className="app">
      <Sidebar
        user="UtkarshDhairyaPathak"
        onLogout={handleLogout}
        onMenuItemClick={handleMenuItemClick}
      />
      <main>
        <Header
          title="Repositories"
          totalRepositories={repositories.length}
          onRefresh={handleRefresh}
          onAddRepository={handleAddRepository}
          onSearch={handleSearch}
        />
        <RepositoryList repositories={repositories} />
      </main>
    </div>
  );
};

export default RepositoryLayout;
