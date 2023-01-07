import React from "react";
import "./RunSummary.css";

const RunSummary = ({ runSummaryArr, bgColor, color }) => {
  return (
    <div className="run_summary_container">
      {runSummaryArr.map((run, i) => (
        <p
          key={`run_${i}_${bgColor}`}
          className="ballData"
          style={{ backgroundColor: bgColor, color: color }}
        >
          {run}
        </p>
      ))}
    </div>
  );
};

export default RunSummary;
