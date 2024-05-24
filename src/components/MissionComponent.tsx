import React from 'react';
import './MissionComponent.css';
import missionImage from '../assets/Goal.png'; // Path to your image

const MissionComponent = () => {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h1 className="heading">OUR MISSION</h1>
        <p className="text">
          <span className="bold-text">Al-Hikmah Discussion Forum’s mission</span> is to create a suitable environment for Muslim youth for discussions, analysis, exchange of ideas, and plans to solve the bigger problems of the future in order to lead a <span className="bold-text">GLOBAL PARADIGM SHIFT.</span>
        </p>
        <h1 className="heading">OUR VISION</h1>
        <p className="text">
          <span className="bold-text">Al-Hikmah Discussion Forum’s vision</span> is to connect Muslim youth of the world with each other for discussion & planning, building knowledge, skills, capability, power, expertise for the <span className="bold-text">BIG CHANGE</span> in the future in order to uplift the status of the Muslim world as leaders and torchbearers.
        </p>
      </div>

      <div className="mission-image">
        <img src={missionImage} alt="Mission" />
      </div>

      <div className="ayah-container">
        <div className="ayah-content">
          <p className="ayah-text"><span className="bold-text">وَإِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى جَاعِلٌۭ فِى ٱلْأَرْضِ خَلِيفَةًۭ</span></p>
          <p className="translation-text">When your Lord said to the angels, “I am going to place a successive ˹human˺ authority on earth.”</p>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
