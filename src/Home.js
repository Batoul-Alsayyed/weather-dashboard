import React from 'react';
import './index.css';
import { IoIosSearch } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { RiArrowDownWideFill } from 'react-icons/ri';
import { TbCloud } from 'react-icons/tb';
import profile from './resources/profile.jpg';
import cloudy from './resources/cloudy.png';

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
      <div className="home-body">
        <div className="home-body-1">
          <div className="home-body-3">
            <div className="home-country">
              <FaLocationDot />
              <p className="home-country-p">Lebanon</p>
            </div>

            <div className="home-weather-info">
              <div className="home-weather-1">
                <h1 className="home-p">Monday</h1>
                <p className="home-p-date">24 Dec, 2023</p>
                <TbCloud />

                <p className="home-temp">26°C</p>
                <p className="home-temp-p">High: 27 Low: 10</p>
              </div>
              <div className="home-weather-2">
                <img src={cloudy} />
                <h1>Cloudy</h1>
                <p>Feels like 26</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-body-1">
          <div className="home-body-2">Test 3</div>
          <div className="home-body-2">Test 3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
