import React, { useState } from "react";
import { Chart } from "primereact/chart";
import Adminnavigation from "../../pages/Navigation/AdminNavigation";
import Container from "@mui/material/Container";

export default function LineChartDemo() {
  const [basicData] = useState({
    labels: ["April", "May", "June", "July", "August", "Septemeber", "Octer"],
    datasets: [
      {
        label: "Beginner",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "#42A5F5",
        tension: 0.4,
      },
      {
        label: "Intermediate",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "#FFA726",
        tension: 0.4,
      },
    ],
  });

  const [lineStylesData] = useState({
    labels: ["April", "May", "June", "July", "August", "Septemeber", "Octer"],
    datasets: [
      {
        label: "Beginner User",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        tension: 0.4,
        borderColor: "red",
      },
      {
        label: "Intermediate Users",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,

        tension: 0.4,
        borderColor: "blue",
      },
      {
        label: "Advanced Users",
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: false,
        borderColor: "green",
        tension: 0.4,
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
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
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();

  return (
    <div>
          <div className='card'>
            <h5>User Statistics</h5>
            <Chart type='line' data={lineStylesData} options={basicOptions} />
          </div>
    </div>
  );
}
