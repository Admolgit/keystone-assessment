import React, {useState} from 'react';
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { CategoriesData, CategoriesData1 } from './ProductsData';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ProductChart = () => {
  const [datas] = useState({
    datasets: [
      {
        label: "Incomes",
        data: CategoriesData.map(data => data.number),
        backgroundColor: "rgb(233,238,251, 0.4)",
        borderColor: "rgb(160,181,236)",
        pointStyle: false,
      },
      {
        label: "Expenses",
        data: CategoriesData1.map(data => data.number),
        backgroundColor: "rgb(253,246,248, 0.4)",
        borderColor: "rgb(242,188,212)",
        pointStyle: false,
      },
    ],
    labels: CategoriesData.map(data => data.productType),
  });

  const optionChart = {
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
      scales: {
        r: {
          angleLines: {
            display: false
          },
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      }
    },
  };

  return (
    <div className='bg-[#fff] text-[#A8B1B8] p-2'>
      <h1 className='p-[2rem] text-[16px] sm-sc:text-[12px] sm-sc:p-[0rem]'>Top Selling Categories</h1>
      <div className='text-[14px] w-[300px] flex justify-center m-auto sm-sc:h-[300px] '>
          <Radar data={datas} options={optionChart.options}></Radar>
        </div>
    </div>
  )
}

export default ProductChart;