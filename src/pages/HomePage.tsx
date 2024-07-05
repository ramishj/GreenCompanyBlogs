import React, { lazy } from 'react';
import './HomePage.css';
import BlogsAndArticles from '../components/BlogsAndArticles';
import MissionComponent from '../components/MissionComponent';
const EventsPage = lazy(() => import('../components/HomeEvents'));
const HomePage: React.FC = () => {
  return (
    <>
    <div className="homepage">
      <div className="content-box">
        <div className="content">
          {/* <div className="ayah">وَٱلَّذِينَ ٱسْتَجَابُوا۟ لِرَبِّهِمْ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ</div> */}
          <div className="translation">"Nature does not hurry, yet everything is accomplished." <br />- Lao Tzu</div>
        </div>
        <div className="mission-statement">
        "Empowering Communities Ecologically, Socially & Economically to become <br></br><span className="green-text">STEWARDS</span> of the EARTH"
        </div>
        <div className="mission-statement2">
          A Call for a <span className="blue-text">GLOBAL</span> Paradigm <span className="blue-text">SHIFT</span>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
    <BlogsAndArticles/>
    <MissionComponent/>
    <EventsPage/>
    </>
  );
};

export default HomePage;
