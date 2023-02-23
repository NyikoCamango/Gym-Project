import React from "react";
import { Chart } from "primereact/chart";

export default function PieChart() {
  const colors = [
    "#c2ccc2",
    "#ce7d78",
    "#ea9e70",
    "#a48a9e",
    "#dhdgfe",
    "#648177",
    "#0d5ac1",
    "#f205e6",
    "#6rcncc",
    "#57c4d8",
    "#283cjc",
    "#225b8",
  ];
  const data = [
    {
      mandant: "Incomplete Workouts",
      ok: 89,
      pending: 10,
      error: 52,
    },
    {
      mandant: "Completed Workouts",
      ok: 66,
      pending: 5,
      error: 33,
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
