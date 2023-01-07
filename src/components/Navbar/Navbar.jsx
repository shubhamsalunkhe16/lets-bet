import React, { useContext } from "react";
import "./Navbar.css";
import IPL from "../../assets/images/ipl-logo.png";
import { AppContext } from "../../context/appContext";

const Navbar = ({ headerText }) => {
  const { setIsTeamsSelected } = useContext(AppContext);
  return (
    <div className="nav_container">
      <img
        src={IPL}
        alt="IPL"
        className="ipl_logo"
        onClick={() => setIsTeamsSelected(false)}
      />
      <h1 className="header_title">{headerText}</h1>
    </div>
  );
};

export default Navbar;
