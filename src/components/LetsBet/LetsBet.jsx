import React, { useContext, useEffect, useState } from "react";
import RunSummary from "../RunSummary/RunSummary";
import Linegraph from "../Linegraph/Linegraph";
import "./LetsBet.css";
import useScoreGenerator from "../../hooks/useScoreGenerator";
import { AppContext } from "../../context/appContext";
import TeamCard from "../TeamCard/TeamCard";
import VS from "../../assets/images/VS.png";
import IPL from "../../assets/images/ipl-logo.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function LetsBet() {
  const [isRematch, setIsRematch] = useState(false);
  const {
    TeamARuns,
    TeamAWickets,
    TeamARunsSummary,
    TeamBRuns,
    TeamBWickets,
    TeamBRunsSummary,
    result,
    setResult,
  } = useScoreGenerator(isRematch);
  const { setIsTeamsSelected, selectedTeamA, selectedTeamB } =
    useContext(AppContext);

  return (
    <>
      <Navbar headerText={`${selectedTeamA.abbr} VS ${selectedTeamB.abbr}`} />
      <div className="score_container">
        <div className="selected_team_cotainer">
          <div className="teamA">
            <img
              src={selectedTeamA.logo}
              alt={selectedTeamA.abbr}
              className="team_logo_header"
            />
          </div>
          <img src={VS} alt="VS" className="vs_img" />
          <div className="teamB">
            <img
              src={selectedTeamB.logo}
              alt={selectedTeamB.abbr}
              className="team_logo_header"
            />
          </div>
        </div>
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <Linegraph
            TeamARunsSummary={TeamARunsSummary}
            TeamBRunsSummary={TeamBRunsSummary}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "500px",
            flexDirection: window.innerWidth < 500 ? "column" : "row",
          }}
        >
          <div>
            <h3 style={{ margin: "10px 0px 0px" }}>
              {selectedTeamA.abbr} - {TeamARuns}/{TeamAWickets}
            </h3>
            <div style={{ display: "flex", gap: 5 }}>
              <RunSummary
                runSummaryArr={TeamARunsSummary}
                bgColor={selectedTeamA.primary}
                color={selectedTeamA.secondary}
              />
            </div>
          </div>
          <div>
            <h3
              style={{
                textAlign: window.innerWidth < 500 ? "left" : "end",
                margin: "10px 0px 0px",
              }}
            >
              {selectedTeamB.abbr} - {TeamBRuns}/{TeamBWickets}
            </h3>

            <RunSummary
              runSummaryArr={TeamBRunsSummary}
              bgColor={selectedTeamB.primary}
              color={selectedTeamB.secondary}
            />
          </div>
        </div>
        {result ? (
          <>
            <div className="results_container">
              <h3 className="results_text">{result}</h3>
            </div>
            <div className="button_container">
              <button
                className="btn largeBtn"
                onClick={() => {
                  setIsRematch((prev) => !prev);
                  setResult("");
                }}
              >
                Rematch
              </button>
              <button
                className="btn largeBtn"
                onClick={() => {
                  setIsTeamsSelected(false);
                }}
              >
                Change Teams
              </button>
            </div>
          </>
        ) : (
          <>
            {TeamARunsSummary.length === 6 && (
              <div className="target_container">
                <h2 className="target_text">Target : {TeamARuns + 1}</h2>
                <h3 className="target_update_text">
                  {selectedTeamB.abbr} need {TeamARuns + 1 - TeamBRuns} to win
                  off {6 - TeamBRunsSummary.length} balls
                </h3>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
