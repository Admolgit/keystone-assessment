import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as FiIcons from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { SideBar } from "./SideBar";

const UserMenu = () => {
  const [sidebar, setSidebar] = useState(true);
  const [clicked, setClicked] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='hide-on-print'>
      <div>
        <IconContext.Provider value={{
          style: {
            color: '#89969F'
          }
        }}>
          <div className='hidden bg-[#fff] h-[80px] justify-between items-center sm-sc:fixed sm-sc:flex sm-sc:left-0 sm-sc:top-0 sm-sc:w-[100%] sm-sc:z-20  '>
            <Link to='#' className='ml-[2rem] text-[24px] bg-[none] sm-sc:ml-[0rem]'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "fixed bg-[#fff] flex justify-center items-center w-[230px] h-[100vh] ml-[2rem] top-0 z-50 duration-700 sm-sc:left-[-100%] sm-sc:ml-[0rem] sm-sc:overflow-auto" : "fixed bg-[#fff] flex justify-center items-center w-[230px] h-[100vh] ml-[2rem] top-0 z-50 duration-700 sm-sc:ml-[0rem] sm-sc:overflow-auto"}>
            <ul className='w-[100%]' onClick={showSidebar}>
              <li className='hidden bg-[#fff] w-[100%] h-[80px] justify-start items-center sm-sc:flex sm-sc:mt-[-7rem] '>
                <Link to='#' className='ml-[2rem] text-[2rem] bg-inherit sm-sc:ml-[0rem] '>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <div className="text-center mt-[-10rem] pb-[3rem] sm-sc:pt-[0rem] sm-sc:pl-[0rem] sm-sc:pb-[2rem] sm-sc:pr-[0rem] sm-sc:mt-[-2rem] sm-sc:text-center ">
                <h1 className="text-[2em] leading-9 font-extrabold font-sans text-[#263555] ">RETRO</h1>
              </div>
              {SideBar.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.title === clicked ? 'ml-[2rem] pt-[1rem] pb-[1rem] pl-[0.5rem] pr-[0.5rem] bg-[#489494] text-[#A8B0E7] duration-300 ' : 'ml-[2rem] pt-[1rem] pb-[1rem] pl-[0.5rem] pr-[0.5rem]'}
                  >
                    <Link className={item.title === clicked ? 'ml-[16px] text-[#A8B0E7] flex items-center gap-2 ' : 'ml-[16px] text-[#AFB6BC] flex items-center gap-2 '} to={item.path} onClick={() => setClicked(item.title)}>
                      {item.icon}
                      <span className=''>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default withRouter(UserMenu);
