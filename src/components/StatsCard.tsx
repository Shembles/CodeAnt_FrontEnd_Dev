import React from "react";
import { HiChartPie } from "react-icons/hi";
import "../styles/StatsCard.css";
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
    <div className="statsCardContainer">
      {/* Main Card */}
      <div className="mainCard">
        <img src={logo} alt="Logo" className="statsLogo" />
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
      <div className="issuesCard">
        <div className="topRight">
          <span className="growth">{growth}</span>
          <p className="textDesc">This week</p>
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
