import React from "react";
import * as AiIcons from "react-icons/ai";
import { IncomeData } from "./SalesData";

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
    <div className="flex justify-between items-center bg-white pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] sm-sc:pl-[0.5rem] pr-[0.5rem] ">
      <div className="flex justify-between items-center gap-[10px] ">
        <h3 className='text-[18px] sm-sc:text-[10px] '>$ {sumTotal.toLocaleString()}</h3>
        <AiIcons.AiOutlineArrowUp className="bg-[#E5F6F5] rounded-[50%] p-[0.2rem] text-[#52BEBA] " />
        <p className='text-[#52BEBA] text-[14px] sm-sc:text-[8px] '>+ {percentageChange.toFixed(2)}%</p>
      </div>
      <div className="flex justify-between items-center gap-[10px] ">
        <div>
          <p className='text-[14px] sm-sc:text-[8px]'><span className="bg-[#3074DE] p-[6px] mr-[5px] rounded-[20%] "> </span> Incomes</p>
        </div>
        <div>
        <p className='text-[14px] sm-sc:text-[8px]'><span className="bg-[#E058A5] p-[6px] mr-[5px] rounded-[20%]"></span> Expenses</p>
        </div>
        <div  className='text-[14px] sm-sc:text-[8px]'>
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
