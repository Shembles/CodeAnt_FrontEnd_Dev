import React, { useState } from "react";
import StatsCard from "./StatsCard.tsx";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { GoKey } from "react-icons/go";
import logo from "../assets/CodeAnt_logo.png";
import bottomLeftWatermark from "../assets/CodeAnt_watermark.png";
import "../styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  const statsData = {
    title: "AI to Detect & Autofix Bad Code",
    stats: [
      { value: "30+", label: "Language Support" },
      { value: "10K+", label: "Developers" },
      { value: "100K+", label: "Hours Saved" },
    ],
    issuesFixed: "500K+",
    growth: "↑ 14%",
  };

  return (
    <div className="loginPage">
      {/* Left Section */}
      <div className="introSection">
        <StatsCard
          title={statsData.title}
          stats={statsData.stats}
          issuesFixed={statsData.issuesFixed}
          growth={statsData.growth}
        />
        <img
          src={bottomLeftWatermark}
          alt="CodeAnt Watermark"
          className="bottomLeftImage"
        />
      </div>

      {/* Right Section */}
      <div className="loginSection">
        <div className="loginContainer">
          <img src={logo} alt="Logo" className="navbarLogo" />
          <h2>Welcome to CodeAnt AI</h2>
          <div className="tabs">
            <button
              className={`tab ${activeTab === "SAAS" ? "active" : ""}`}
              onClick={() => setActiveTab("SAAS")}
            >
              SAAS
            </button>
            <button
              className={`tab ${activeTab === "Self Hosted" ? "active" : ""}`}
              onClick={() => setActiveTab("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>
          <hr />
          <div className="loginButtons">
            {activeTab === "SAAS" ? (
              <>
                <button className="loginBtn github">
                  <span className="icon">
                    <FaGithub />
                  </span>
                  Sign in with GitHub
                </button>
                <button className="loginBtn bitbucket">
                  <span className="icon">
                    <FaBitbucket />
                  </span>
                  Sign in with Bitbucket
                </button>
                <button className="loginBtn azure">
                  <span className="icon">
                    <VscAzureDevops />
                  </span>
                  Sign in with Azure DevOps
                </button>
                <button className="loginBtn gitlab">
                  <span className="icon">
                    <FaGitlab />
                  </span>
                  Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button className="loginBtn gitlab">
                  <span className="icon">
                    <FaGitlab />
                  </span>
                  Self Hosted GitLab
                </button>
                <button className="loginBtn sso">
                  <span className="icon">
                    <GoKey />
                  </span>
                  Sign in with SSO
                </button>
              </>
            )}
          </div>
        </div>
        <div className="privacy">
          <p>
            By signing up you agree to the <a href="/privacy">Privacy Policy</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
