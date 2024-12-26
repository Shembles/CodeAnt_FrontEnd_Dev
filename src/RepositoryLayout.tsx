import React from "react";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import RepositoryList from "./components/RepositoryList.tsx";
import "./styles/App.css";

const RepositoryLayout: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <RepositoryList />
      </main>
    </div>
  );
};

export default RepositoryLayout;
