import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { AppContext } from "../../context/appContext";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ["0.1", "0.2", "0.3", "0.4", "0.5", "1.0"];

const Linegraph = ({ TeamARunsSummary, TeamBRunsSummary }) => {
  const { selectedTeamA, selectedTeamB } = useContext(AppContext);
  const data = {
    labels,
    datasets: [
      {
        label: selectedTeamA.abbr,
        data: TeamARunsSummary?.map((data) => (data === "W" ? 0 : data)),
        borderColor: selectedTeamA.primary,
        backgroundColor: selectedTeamA.secondary,
      },
      {
        label: selectedTeamB.abbr,
        data: TeamBRunsSummary?.map((data) => (data === "W" ? 0 : data)),
        borderColor: selectedTeamB.primary,
        backgroundColor: selectedTeamB.secondary,
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default Linegraph;
