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
import './ProductChart.scss';

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
    <div className='productChart'>
      <h1>Top Selling Categories</h1>
      <div className='chart'>
          <Radar data={datas} options={optionChart.options}></Radar>
        </div>
    </div>
  )
}

export default ProductChart;