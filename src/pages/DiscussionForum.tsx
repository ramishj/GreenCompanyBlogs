import React from 'react';
import './DiscussionForum.css';
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon from Material-UI
import discussionImage from '../assets/Image_Intellect_DiscussionPage.png'; // Import the image
import DiscussionForumMain from '../components/DiscussionForumMain';
import {Routes,Route} from 'react-router-dom';
import SubForumList from '../components/SubForumList';
import SubForum from '../components/subForumPage';
const DiscussionForum: React.FC = () => {
  return (
  <>   
   <div className="discussion-forum-page">
      <div className="top-section">
        <div className="text-container">
          <h1 className="forum-title">
            <span className="highlight">Al Fatah</span> Discussion Forum
          </h1>
          <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder="Search a Topic or a Keyword" />
            <SearchIcon className="search-icon" /> {/* Use SearchIcon component */}
          </div>
          <p className="forum-description">
            Al Hikmah Discussion Forum is established to connect Muslim Youth for discussions on various fields of expertise to become <span className="highlight">Intellectuals, Leaders</span> & <span className="highlight">Fateh of the World</span>.
          </p>
        </div>
        <div className="image-container">
          <img src={discussionImage} alt="Discussion Image" className="discussion-image" />
        </div>
      </div>
      <Routes>
          <Route path="/" element={<DiscussionForumMain />} />
          <Route path='/forum' element={<SubForumList />} />
          <Route path='/forum/subForum' element={<SubForum />} />
      </Routes>
    </div>
    
    </>

  );
};

export default DiscussionForum;
