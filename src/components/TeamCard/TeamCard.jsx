import React from "react";
import "./TeamCard.css";
import Bat from "../../assets/images/bat.png";
import Ball from "../../assets/images/ball.png";

const TeamCard = ({ team, onClick, isDisabled = false }) => {
  return (
    <div
      className={`team_card ${isDisabled ? "disabled" : "abled"}`}
      style={{ backgroundColor: team.primary || "gray" }}
      onClick={() => onClick?.(team)}
    >
      <div className="logo_container">
        {team.logo ? (
          <img src={team.logo} alt={team.abbr} className="team_logo" />
        ) : null}
      </div>
      <p className="team_name">{team.abbr || "Team"}</p>
      <div className="rating_container">
        <div className="batting_rating">
          <img src={Bat} className="rating_icon" alt="bat" />
          <p className="rating">{team.battingRating || "-"}</p>
        </div>
        <div className="bowling_rating">
          <img src={Ball} className="rating_icon" alt="ball" />
          <p className="rating">{team.bowlingRating || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
