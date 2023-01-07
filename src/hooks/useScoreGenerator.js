import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appContext";

const useScoreGenerator = (isRematch) => {
  const [TeamAScoreBoard, setTeamAScoreBoard] = useState({
    runs: 0,
    Wickets: 0,
    runsSummary: [],
  });
  const [TeamBScoreBoard, setTeamBScoreBoard] = useState({
    runs: 0,
    Wickets: 0,
    runsSummary: [],
  });
  const [result, setResult] = useState("");
  const {
    runs: TeamARuns,
    Wickets: TeamAWickets,
    runsSummary: TeamARunsSummary,
  } = TeamAScoreBoard;
  const {
    runs: TeamBRuns,
    Wickets: TeamBWickets,
    runsSummary: TeamBRunsSummary,
  } = TeamBScoreBoard;

  const {
    setIsTeamsSelected,
    selectedTeamA,
    setSelectedTeamA,
    selectedTeamB,
    setSelectedTeamB,
  } = useContext(AppContext);

  useEffect(() => {
    var balls = 0;
    let TeamB_runs = 0;
    let TeamB_wickets = 0;
    let TeamBRunsArr = [];
    let TeamA_runs = 0;
    let TeamA_wickets = 0;
    let TeamARunsArr = [];
    setTeamAScoreBoard({
      runs: 0,
      Wickets: 0,
      runsSummary: [],
    });
    setTeamBScoreBoard({
      runs: 0,
      Wickets: 0,
      runsSummary: [],
    });
    setResult("");
    var interval = setInterval(() => {
      balls += 1;
      var run = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
      if (balls > 6) {
        TeamB_runs += run;
        if (run === 0) {
          var isOut = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
          if (isOut == 0 || balls === 12) {
            TeamB_wickets += 1;
            run = "W";
            setTeamBScoreBoard((prev) => ({
              ...prev,
              Wickets: prev.Wickets + 1,
            }));
          }
        }
        TeamBRunsArr = [...TeamBRunsArr, run];
        setTeamBScoreBoard((prev) => {
          let newRun = run === "W" ? 0 : run;
          return {
            ...prev,
            runs: prev.runs + newRun,
            runsSummary: [...prev.runsSummary, run],
          };
        });
      } else {
        TeamA_runs += run;
        if (run === 0) {
          var isOut = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
          if (isOut == 0 || balls === 6) {
            TeamA_wickets += 1;
            run = "W";
            setTeamAScoreBoard((prev) => ({
              ...prev,
              Wickets: prev.Wickets + 1,
            }));
          }
        }
        TeamARunsArr = [...TeamARunsArr, run];
        setTeamAScoreBoard((prev) => {
          let newRun = run === "W" ? 0 : run;
          return {
            ...prev,
            runs: prev.runs + newRun,
            runsSummary: [...prev.runsSummary, run],
          };
        });
      }

      if (balls == 12) {
        if (TeamA_runs == TeamB_runs) {
          setResult(`SCORES ARE LEVEL! match is drawn. What a match it was!`);
        } else if (TeamA_runs + 1 <= TeamB_runs) {
          setResult(
            `${selectedTeamB.abbr} Won by ${
              TeamB_runs - TeamA_runs
            } runs. such a nail bitting match!`
          );
        } else if (TeamA_runs + 1 >= TeamB_runs) {
          setResult(
            `${selectedTeamA.abbr} have won in DRAMATIC STYLE by ${
              TeamA_runs - TeamB_runs
            } runs! `
          );
        }
        clearInterval(interval);
      }
      if (TeamA_runs + 1 <= TeamB_runs && TeamARunsArr.length == 6) {
        setResult(
          6 - TeamBRunsArr.length === 0
            ? `${selectedTeamB.abbr} wins last-ball thriller, beats ${selectedTeamA.abbr}.`
            : `${selectedTeamB.abbr} Won with ${
                6 - TeamBRunsArr.length
              } balls left. Easy win for them.`
        );
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [isRematch]);

  return {
    TeamARuns,
    TeamAWickets,
    TeamARunsSummary,
    TeamBRuns,
    TeamBWickets,
    TeamBRunsSummary,
    result,
    setResult,
  };
};

export default useScoreGenerator;
