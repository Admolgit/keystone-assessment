import React from "react";
import * as CiIcons from "react-icons/ci";
import HeaderImg from "../../assets/images/About-us-global-product-leader.jpg";

const Header = () => {
  return (
    <div className='flex justify-between items-center mt-[3rem] mr-[2rem] items-end bg-[#F4F8FC] pt-[5px] pb-[5px] pr-[20px] pl-[20px] sm-sc:mt-[5rem] sm-sc:pr-[20px]'>
      <div className='p-[5px] flex justify-center items-center'>
        <input className='p-[10px] rounded-none w-[300px] bg-[#E8EEF4] sm-sc:w-[100px] sm-sc:p-[10px] sm-sc:rounded-none' type='search' placeholder='Search' />
          <span className='flex items-center justify-center w-[200px] ml-[16rem] absolute sm-sc:ml-[5rem]'><CiIcons.CiSearch /></span>
      </div>
      <div className='flex justify-between items-center gap-[2px] text-end '>
        <div className=''>
          <h2 className='text-[18px] sm-sc:text-[12px]'>jamesbrown@example.com</h2>
          <p className='text-[14px] sm-sc:text-[10px]'>Admin</p>
        </div>
        <div className=''>
          <img className='w-[50px] h-[40px] rounded-[50%] ml-[1rem] sm-sc:w-[25px]' src={HeaderImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
