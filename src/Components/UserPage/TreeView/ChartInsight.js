import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
];

function createGradient(ctx, area, type) {
  var colorStart;
  var colorEnd;
  if (type === 1) {
    colorStart = "rgba(236, 72, 153, 0.5)";
    colorEnd = "rgba(20, 184, 166, 0.5)";
  } else {
    colorStart = "rgba(236, 72, 153, 1)";
    colorEnd = "rgba(20, 184, 166, 1)";
  }
  const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

export default function ChartInsight() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const data = {
      labels,
      datasets: [
        {
          label: "Xp/Month",
          data: labels.map(() =>
            faker.datatype.number({ min: 100, max: 1000 })
          ),
          fill: true,
          borderColor: createGradient(chart.ctx, chart.chartArea, 0),
          backgroundColor: createGradient(chart.ctx, chart.chartArea, 1),
        },
      ],
    };

    setChartData(data);
  }, []);

  return <Line ref={chartRef} data={chartData} />;
}
