import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["223AED", "132AED", "121AED"],
  datasets: [
    {
      label: "# of Votes",
      data: [223, 132, 121],
      backgroundColor: ["#008E97", "#DA9100", "#FC554E"],
      border: "none",
      borderWidth: 1,
    },
  ],
};


const DoughnutChart = () => {
  return (
    <div>
      <Doughnut 
      width={100}
      height={200}
      options={{
        maintainAspectRatio: false,
      }}
       data={data} />
    </div>
  );
};

export default DoughnutChart;
