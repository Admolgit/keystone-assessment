import React from "react";
import * as CiIcons from "react-icons/ci";
import HeaderImg from "../../assets/images/About-us-global-product-leader.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <div className='searchContainer'>
        <input className='searchInput' type='search' placeholder='Search' />
          <span className='search'><CiIcons.CiSearch /></span>
      </div>
      <div className='admin'>
        <div className='admin-name'>
          <h2>jamesbrown@example.com</h2>
          <p>Admin</p>
        </div>
        <div className=''>
          <img className='adminImage' src={HeaderImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
