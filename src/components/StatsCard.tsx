import React from "react";
import "../styles/StatsCard.css";
import { HiChartPie } from "react-icons/hi";
import logo from "../assets/CodeAnt_mini_logo.png";

interface StatsCardProps {
  title: string;
  stats: { value: string; label: string }[];
  issuesFixed: string;
  growth: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  stats,
  issuesFixed,
  growth,
}) => {
  return (
    <div className="stats-card-container">
      {/* Main Card */}
      <div className="main-card">
        <img src={logo} alt="Logo" className="stats-logo" />
        <span>{title}</span>
        <hr />
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Issues Fixed Card */}
      <div className="issues-card">
        <div className="top-right">
          <span className="growth">{growth}</span>
          <p className="text-desc">This week</p>
        </div>
        <span className="icon">
          <HiChartPie />
        </span>
        <p>Issues Fixed</p>
        <h2>{issuesFixed}</h2>
      </div>
    </div>
  );
};

export default StatsCard;
