import "../Loader/loader.scss";
import React from "react";

export const Loader = () => {
  return (
    <div className="container">
      <div className="transition-loader">
        <div className="transition-loader-inner">
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
        </div>
      </div>
    </div>
  );
};
