import React, { useState } from "react";
import { Chart } from "primereact/chart";
import Adminnavigation from "../../pages/Navigation/AdminNavigation";
import Container from "@mui/material/Container";

export default function BarGraph() {
  const [stackedData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "bar",
        label: "Junior",
        backgroundColor: "red",
        data: [50, 25, 12, 48, 90, 76, 42],
      },
      {
        type: "bar",
        label: "Intermediate",
        backgroundColor: "blue",
        data: [21, 84, 24, 75, 37, 65, 34],
      },
      {
        type: "bar",
        label: "Pro",
        backgroundColor: "green",
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  });

  const getLightTheme = () => {
    let stackedOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      stackedOptions,
    };
  };

  const { basicOptions, stackedOptions } = getLightTheme();

  return (
    <div>
          <br></br>
          <br></br>
          <h5>User Stastistics</h5>
          <Chart type='bar' data={stackedData} options={stackedOptions} />
       

     
    </div>
  );
}
