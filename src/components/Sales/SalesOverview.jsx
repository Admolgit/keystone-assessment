import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import Button from "../../Button";
import { IncomeData } from "./SalesData";
import { ExpensesData } from "./SalesData";
import "./SalesOverviews.scss";
import Revenue from "./Revenue";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const SalesOverview = () => {
  const [datas] = useState({
    datasets: [
      {
        type: "line",
        label: "Incomes",
        data: IncomeData.map((income) => income.income),
        backgroundColor: "rgb(233,238,251, 0.4)",
        borderColor: "rgb(160,181,236)",
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointStyle: false,
      },
      {
        type: "line",
        label: "Expenses",
        data: ExpensesData.map((income) => income.income),
        backgroundColor: "rgb(253,246,248, 0.4)",
        borderColor: "rgb(242,188,212)",
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointStyle: false,
      },
    ],
    labels: IncomeData.map((data) => data.label),
  });

  const optionChart = {
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
        },
      },
    },
  };

  return (
    <div className='salesOverviews'>
      <div className='headers'>
        <h1>Sales Overview</h1>
        <Button className='button' title='+ Add Offer' />
      </div>
      <div className='revenueLine'>
        <div>
          <Revenue />
        </div>
        <div className='chart'>
          <Line data={datas} options={optionChart.options}></Line>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
