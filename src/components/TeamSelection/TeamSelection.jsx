import React, { useContext, useState } from "react";
import TeamDataArr from "../../utils/teamData";
import "./TeamSelection.css";
import VS from "../../assets/images/VS.png";
import Cross from "../../assets/images/close.png";
import TeamCard from "../TeamCard/TeamCard";
import { AppContext } from "../../context/appContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const TeamSelection = () => {
  const {
    setIsTeamsSelected,
    selectedTeamA,
    setSelectedTeamA,
    selectedTeamB,
    setSelectedTeamB,
  } = useContext(AppContext);

  const selectTeam = (team) => {
    if (!selectedTeamA.abbr) {
      setSelectedTeamA(team);
    } else {
      setSelectedTeamB(team);
    }
  };
  return (
    <>
      <Navbar headerText={"SELECT TEAMS"} />
      <div className="selected_team_cotainer">
        <div className="teamA">
          <TeamCard team={selectedTeamA} />
          {selectedTeamA.abbr && (
            <img
              src={Cross}
              alt="remove"
              className="cross"
              onClick={() => setSelectedTeamA({})}
            />
          )}
        </div>
        <img src={VS} alt="VS" className="vs_img" />
        <div className="teamB">
          <TeamCard team={selectedTeamB} />
          {selectedTeamB.abbr && (
            <img
              src={Cross}
              alt="remove"
              className="cross"
              onClick={() => setSelectedTeamB({})}
            />
          )}
        </div>
      </div>
      <button
        className="btn largeBtn"
        disabled={!(!!selectedTeamA.abbr && !!selectedTeamB.abbr)}
        onClick={() => {
          setIsTeamsSelected(true);
        }}
      >
        Let's Bet !
      </button>
      <hr style={{ margin: "15px 0px" }} />
      <div className="teams_container">
        {TeamDataArr.map((team) => (
          <TeamCard
            key={team.abbr}
            team={team}
            onClick={selectTeam}
            isDisabled={
              selectedTeamA.abbr === team.abbr ||
              selectedTeamB.abbr === team.abbr
            }
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TeamSelection;
