// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserInputs from './RanuComponents/userInputs';
import FloorPlansPage from './virajComponents/generateFloorPlan';
import DownloadDataPage from './RanuComponents/downloadPage';
//import About from './About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Take User Input</Link>
            </li>
            <li>
             <Link to="/generateFP">Generate Floor Plan</Link> 
            </li>
            <li>
             <Link to="/downloadPage">Download Page</Link> 
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<UserInputs />} />
          <Route path="/generateFP" element={<FloorPlansPage/>} />
          <Route path="/downloadPage" element={<DownloadDataPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
