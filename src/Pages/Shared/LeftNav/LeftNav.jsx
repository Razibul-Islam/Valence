import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../../assets/logo.png';

const LeftNav = ({ setDrawer }) => {
  return (
    <div className='flex justify-between items-center lg:hidden'>
          <img src={logo} alt="" className='w-2/12' />
      <div className="">
        <label
          htmlFor="drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
          onClick={() => setDrawer(true)}
        >
          <GiHamburgerMenu className='text-3xl'/>
        </label>
      </div>
    </div>
  );
};

export default LeftNav;