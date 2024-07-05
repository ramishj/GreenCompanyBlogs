import React from 'react';
import './MissionComponent.css';
import missionImage from '../assets/Goal.png'; // Path to your image
import { useSearchParams } from 'react-router-dom';

const MissionComponent = () => {
  const [searchParams] = useSearchParams();
    const forumName = searchParams.get('forumName') || '';
    console.log(forumName)
  return (
    <div className="mission-container">
      <div className="mission-image">
        <img src={missionImage} alt="Mission" />
      </div>
      <div className="mission-content">
        <div className="missionConatiner">
        <h1 className="heading">OUR MISSION</h1>
        <p className="text">
          <span className="bold-text"><span>Green Earth Forum’s mission</span> is to create a suitable environment for individuals to engage in discussions, analysis, exchange of ideas, and plans to solve the bigger environmental challenges of the future in order to lead a <span className="bold-text">GLOBAL ECOLOGICAL SHIFT.</span></span>
        </p></div>
        <div className="visionContainer">
        <h1 className="heading">OUR VISION</h1>
        <p className="text">
        <span className="bold-text">Green Earth Forum’s vision</span> is to connect individuals around the world for discussion and planning, building knowledge, skills, capability, power, and expertise for the <span className="bold-text">BIG CHANGE</span> in the future, in order to uplift the status of global communities as leaders and stewards of the Earth.
        </p></div>
      </div>

      

      <div className="ayah-container">
        <div className="ayah-content">
          <p className="ayah-text"><span className="bold-text">Some Quote  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, necessitatibus.                            </span></p>
          <p className="translation-text">-Whoever Said it</p>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
