import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} style={spinnerStyle} alt="Loading" />
    </Fragment>
  );
};

const spinnerStyle = {
  width: "200px",
  margin: "auto",
  display: "block",
};

export default Spinner;
