import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import houseImage from '../assets/house.jpg'; // Ensure this image path is correct

const Home = () => {
  return (
    <div className="home">
      <img src={houseImage} alt="House" className="home-image" />
      <div className="home-content">
        <h1>APEXA AI</h1>
        <p>All New Automated House Planning & Visualization System</p>
        <p>Upload your images and start making a house plan!</p>
        <NavLink to="/create" className="home-button">
  Create A Plan
        </NavLink>
      </div>
    </div>
  );
};

export default Home;