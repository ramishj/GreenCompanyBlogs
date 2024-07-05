import React from 'react';
import './Events.css'; // Import your CSS file
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon from Material-UI
import discussionImage from '../assets/Image_Intellect_DiscussionPage.png'; // Import the image

const EventsPage: React.FC = () => {
  return (
    <div className="discussion-forum-page">
      <div className="top-section">
        <div className="text-container">
          <h1 className="forum-title">
            <span className="highlight">Green Company</span> Events Zone
          </h1>
          <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder="Search for Events" />
            <SearchIcon className="search-icon" /> {/* Use SearchIcon component */}
          </div>
          <p className="forum-description">
          Green Earth Forum is established to connect individuals for discussions on various fields of expertise to become <span className="highlight">Intellectuals, Leaders</span> & <span className="highlight">Guardians of the Earth</span>
          </p>
        </div>
        {/* <div className="image-container">
          <img src={discussionImage} alt="Discussion Image" className="discussion-image" />
        </div> */}
      </div>
    </div>
  );
};

export default EventsPage;
