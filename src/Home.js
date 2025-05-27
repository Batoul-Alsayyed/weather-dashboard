import React from 'react';
import './index.css';
import { IoIosSearch } from 'react-icons/io';
import { RiArrowDownWideFill } from 'react-icons/ri';
import profile from './resources/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-search">
          <div className="home-search-icon">
            <IoIosSearch />
          </div>
          <input className="home-search-input" placeholder="Search city..." />
        </div>
        <div className="home-user-profile">
          <img className="home-profile" src={profile} alt="profile" />
          <p>User Name</p>

          <RiArrowDownWideFill className="home-user-profile-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
