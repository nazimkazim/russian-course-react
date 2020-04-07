import React from "react";

function ProgressBar(props) {
  return (
    <>
      <progress
        className="progress is-primary"
        value={props.value}
        max={props.max}></progress>
    </>
  );
}

export default ProgressBar;
