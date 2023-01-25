import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  PointElement,
  Filler,
} from "chart.js";
import { IncomeData } from "../Sales/SalesData";
import "./SalesCard.scss";

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  PointElement,
  Filler
);

const SalesCard = () => {
  const [datas] = useState({
    datasets: [
      {
        type: "bar",
        label: "Incomes",
        data: IncomeData.map((data) => data.income),
        backgroundColor: "#B2C1EF",
        borderColor: "#A5C3F1",
        tension: 0.4,
        fill: true,
      },
    ],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
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
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };

  return (
    <div className='cardContainer'>
      <div className='row diffColor'>
        <h2>Daily Income</h2>
        <div className='row2'>
          <div className='money'>
            <p>$ 345</p>
          </div>
          <div className='image'>
            <Line data={datas} options={optionChart.options}></Line>
          </div>
        </div>
      </div>
      <div className='row'>
        <h2>Daily Expense</h2>
        <div className='row2'>
          <div className='money'>
            <p>$ 380</p>
          </div>
          <div className='image'>
            <Bar data={datas} options={optionChart.options}></Bar>
          </div>
        </div>
      </div>
      <div className='row'>
        <h2>Weekly Income</h2>
        <div className='row2'>
          <div className='money'>
            <p>$ 5380</p>
          </div>
          <div className='image'>
            <Line data={datas} options={optionChart.options}></Line>
          </div>
        </div>
      </div>
      <div className='row'>
        <h2>Weekly Expense</h2>
        <div className='row2'>
          <div className='money'>
            <p>$ 4320</p>
          </div>
          <div className='image'>
            <Line data={datas} options={optionChart.options}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
