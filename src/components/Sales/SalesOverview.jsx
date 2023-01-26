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
    <div className='bg-[#F4F8FC] p-[2rem] mr-[2rem] mt-[-1.5rem] mb-[-2rem] '>
      <div className='flex justify-between bg-[#fff] pt-[1rem] pb-[1rem] pr-[2rem] pl-[2rem] mb-[0.2rem] sm-sc:pl-[1rem] sm-sc:pr-[1rem] '>
        <h1 className='text-[16px] sm-sc:text-[12px]'>Sales Overview</h1>
        <Button className='bg-[#4867D5] text-[#fff] pt-[10px] pb-[10px] pr-[3rem] pl-[3rem] rounded-[5px] border-none text-[12px] cursor-pointer ' title='+ Add Offer' />
      </div>
      <div className='pl-[1rem] pr-[1rem] bg-[#ffffff] sm-sc:pl-[0.5rem] sm-sc:pl-[0.5rem] '>
        <div>
          <Revenue />
        </div>
        <div className='bg-[#fff] text-[14px] w-[100%] p-[1rem] w-[80%] h-[80%] flex justify-center m-auto sm-sc:w-[280px] sm-sc:h-[170px] '>
          <Line data={datas} options={optionChart.options}></Line>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
