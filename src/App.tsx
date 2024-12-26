import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginPage from "./components/LoginPage.tsx";
import RepositoryLayout from "./RepositoryLayout.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/repositories" element={<RepositoryLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
