import React from 'react';
import './HomePage.css';
import BlogsAndArticles from '../components/BlogsAndArticles';
import MissionComponent from '../components/MissionComponent';
const HomePage: React.FC = () => {
  return (
    <>
    <div className="homepage">
      <div className="content-box">
        <div className="content">
          <div className="ayah">وَٱلَّذِينَ ٱسْتَجَابُوا۟ لِرَبِّهِمْ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ</div>
          <div className="translation">Those who respond to their Lord, establish prayer, conduct their affairs by mutual consultation, and spend from what We have provided for them.</div>
        </div>
        <div className="mission-statement">
          Empowering Muslim Youth Intellectually, politically & Economically to become <br></br><span className="blue-text">LEADERS</span> of the WORLD
        </div>
        <div className="mission-statement2">
          A Call for a <span className="blue-text">GLOBAL</span> Paradigm <span className="blue-text">SHIFT</span>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
    <BlogsAndArticles/>
    <MissionComponent/>
    </>
  );
};

export default HomePage;
