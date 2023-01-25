import React from "react";
import * as AiIcons from "react-icons/ai";
import { IncomeData } from "./SalesData";
import './Revenue.scss';

const Revenue = () => {
  // Coverting income to an array of incomes
  const incomeArray = IncomeData.map((income) => income.income);
  // Sum up the incomes
  const sumTotal = incomeArray.reduce((a, b) => a + b, 0);
  // Get the previous income index
  const previousIndex = incomeArray.length - 2;
  // Get the current income index
  const currentIndex = incomeArray.length - 1;
  // Get the previous income
  const previousRevenue = incomeArray[previousIndex];
  // Get the current income
  const currentRevenue = incomeArray[currentIndex];
  // Calculate percentage increase
  const percentageChange =
    ((currentRevenue - previousRevenue) / currentRevenue) * 100;

  return (
    <div className="revenueContainer">
      <div className="revenue">
        <h3>$ {sumTotal.toLocaleString()}</h3>
        <AiIcons.AiOutlineArrowUp className="arrow" />
        <p>+ {percentageChange.toFixed(2)}%</p>
      </div>
      <div className="select">
        <div>
          <p><span className="incomes"> </span> Incomes</p>
        </div>
        <div>
        <p><span className="expenses"></span> Expenses</p>
        </div>
        <div>
          <select value="Year">
            <option value="Year">Year</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
