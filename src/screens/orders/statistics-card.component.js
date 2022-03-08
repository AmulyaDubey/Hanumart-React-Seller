import React from "react";

const StatisticsCard = ({ title, number }) => (
  <div className="card p-2 shadow">
    <h5>{title}</h5>
    <h3>{number}</h3>
  </div>
);

export default StatisticsCard;
