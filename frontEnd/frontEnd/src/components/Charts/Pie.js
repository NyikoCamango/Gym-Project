import React from "react";
import { Chart } from "primereact/chart";

export default function PieChart() {
  const colors = [
    "#c2ccc2",
    "#cverv4",
    "#ea9e70",
    "#g54y6v",
    "#f205e6",
    "#fregf5",
    "#57c4d8",
    "#a48a9e",
    "#dfe4er",
    "#648177",

    "#v5tv44",
    "#cvg4v5",
  ];
  const data = [
    {
      mandant: "Incomplete Workouts",
      ok: 9,
      pending: 10,
      error: 22,
    },
    {
      mandant: "Completed Workouts",
      ok: 6,
      pending: 5,
      error: 3,
    },
  ];

  const chartData = {
    labels: data.map((el) => el.mandant),
    datasets: [
      {
        data: data.map((el) => el.ok + el.pending + el.error),
        backgroundColor: colors.slice(0, data.length),
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
  };
  return (
    <div className='App'>
      <Chart type='pie' data={chartData} options={options} />
    </div>
  );
}
