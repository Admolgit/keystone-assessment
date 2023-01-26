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
    <div className='flex pl-[20px] pr-[20px] items-center bg-[#f4f8fc] p-[1rem] mr-[2rem] justify-between  '>
      <div className='p-[2rem] w-[280px] bg-[#436ed9] text-white sm-sc:p-[0.5rem] sm-sc:w-[80px] '>
        <h2 className='text-[14px] font-normal w-[100%] pb-[10px] text-[#a8b1b8] sm-sc:text-[8px] sm-sc:pb-[10px] '>Daily Income</h2>
        <div className='flex justify-between items-center'>
          <div className='text-[30px] font-bold w-[100%] sm-sc:text-[10px] '>
            <p>$ 345</p>
          </div>
          <div className='w-[100px] h-[50px] sm-sc:w-[50px] sm-sc:h-[30px] '>
            <Line data={datas} options={optionChart.options}></Line>
          </div>
        </div>
      </div>
      <div className='p-[2rem] w-[280px] bg-[#ffffff] sm-sc:p-[0.5rem] sm-sc:w-[80px]'>
        <h2 className='text-[14px] font-normal w-[100%] pb-[10px] text-[#a8b1b8] sm-sc:text-[8px] sm-sc:pb-[10px] '>Daily Expense</h2>
        <div className='flex justify-between items-center'>
          <div className='text-[30px] font-bold w-[100%] sm-sc:text-[10px] '>
            <p>$ 380</p>
          </div>
          <div className='w-[100px] h-[50px] sm-sc:w-[50px] sm-sc:h-[30px]'>
            <Bar data={datas} options={optionChart.options}></Bar>
          </div>
        </div>
      </div>
      <div className='p-[2rem] w-[280px] bg-[#ffffff] sm-sc:p-[0.5rem] sm-sc:w-[80px] '>
        <h2 className='text-[14px] font-normal w-[100%] pb-[10px] text-[#a8b1b8] sm-sc:text-[8px] sm-sc:pb-[10px] '>Weekly Income</h2>
        <div className='flex justify-between items-center'>
          <div className='text-[30px] font-bold w-[100%] sm-sc:text-[10px] '>
            <p>$ 5380</p>
          </div>
          <div className='w-[100px] h-[50px] sm-sc:w-[50px] sm-sc:h-[30px] '>
            <Line data={datas} options={optionChart.options}></Line>
          </div>
        </div>
      </div>
      <div className='p-[2rem] w-[280px] bg-[#ffffff] sm-sc:p-[0.5rem] sm-sc:w-[80px]'>
        <h2 className='text-[14px] font-normal w-[100%] pb-[10px] text-[#a8b1b8] sm-sc:text-[8px] sm-sc:pb-[10px] '>Weekly Expense</h2>
        <div className='flex justify-between items-center'>
          <div className='text-[30px] font-bold w-[100%] sm-sc:text-[10px] '>
            <p>$ 4320</p>
          </div>
          <div className='w-[100px] h-[50px] sm-sc:w-[50px] sm-sc:h-[30px]'>
            <Line data={datas} options={optionChart.options}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
