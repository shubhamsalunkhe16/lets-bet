import React, { useState } from "react";
import LetsBet from "./components/LetsBet/LetsBet";
import TeamSelection from "./components/TeamSelection/TeamSelection";
import { AppContext } from "./context/appContext";
import "./App.css";

const App = () => {
  const [isTeamsSelected, setIsTeamsSelected] = useState(false);
  const [selectedTeamA, setSelectedTeamA] = useState({});
  const [selectedTeamB, setSelectedTeamB] = useState({});
  return (
    <AppContext.Provider
      value={{
        isTeamsSelected,
        setIsTeamsSelected,
        selectedTeamA,
        setSelectedTeamA,
        selectedTeamB,
        setSelectedTeamB,
      }}
    >
      {isTeamsSelected ? <LetsBet /> : <TeamSelection />}
    </AppContext.Provider>
  );
};

export default App;
