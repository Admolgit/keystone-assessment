import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as FiIcons from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";
import "./DashboardMenu.scss";
import { IconContext } from "react-icons/lib";
import { SideBar } from "./SideBar";

const UserMenu = () => {
  const [sidebar, setSidebar] = useState(false);
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
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <div className="sidebar-header">
                <h1 className="logo">RETRO</h1>
              </div>
              {SideBar.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.title === clicked ? 'dash-link active' : 'dash-link'}
                  >
                    <Link to={item.path} onClick={() => setClicked(item.title)}>
                      {item.icon}
                      <span className='menu-span'>{item.title}</span>
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
