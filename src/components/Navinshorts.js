import React from "react";
import "./Navinshorts.css";
import SwipeableTemporaryDrawer from "./Sidebar";
const Navinshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <SwipeableTemporaryDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="90%"
        alt="logo"
      ></img>
    </div>
  );
};

export default Navinshorts;
