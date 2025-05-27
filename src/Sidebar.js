import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import { IoHomeOutline } from 'react-icons/io5';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { MdOutlineMyLocation } from 'react-icons/md';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from './resources/logo/logo-transparent.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="nav-logo" src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <div className="link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            <IoHomeOutline />
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/forecast"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            <TiWeatherPartlySunny />
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            <MdOutlineMyLocation />
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            <IoCalendarOutline />
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            <IoSettingsOutline />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
