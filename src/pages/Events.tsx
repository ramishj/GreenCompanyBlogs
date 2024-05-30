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
            <span className="highlight">Al Fatah</span> Events Zone
          </h1>
          <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder="Search for Events" />
            <SearchIcon className="search-icon" /> {/* Use SearchIcon component */}
          </div>
          <p className="forum-description">
            Al Fatah Events Zone is established to connect Muslim Youth for discussions on various fields of expertise to become <span className="highlight">Intellectuals, Leaders</span> & <span className="highlight">Fateh of the World</span>.
          </p>
        </div>
        <div className="image-container">
          <img src={discussionImage} alt="Discussion Image" className="discussion-image" />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
