import React from "react";
import { ProgressBarContainer as ProgressBar } from "progress_bar_for_react";

const Simple = () => {
  return (
    <div id="container">
      <ProgressBar percentage={50} />
    </div>
  );
};

export default Simple;
