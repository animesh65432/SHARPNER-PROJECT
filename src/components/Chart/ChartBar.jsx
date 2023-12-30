import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barhight = "0%";

  if (props.maxvalue > 0) {
    barhight = Math.round((props.value / props.maxvalue) * 100) + barhight;
  }
  return (
    <>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barhight }}></div>
        </div>
        <div className="chart-bar__label ">{props.label}</div>
      </div>
    </>
  );
};

export default ChartBar;
