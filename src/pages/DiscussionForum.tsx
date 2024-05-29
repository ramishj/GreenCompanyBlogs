// src/pages/DiscussionForumPage.tsx
import React from 'react';
import './DiscussionForum.css';

const DiscussionForum: React.FC = () => {
  return (
    <div className="discussion-forum-page">
      <div className="top-section">
        <h1 className="forum-title">
          <span className="highlight">Al Hikmah</span> Discussion Forum
        </h1>
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search a Topic or a Keyword" />
          <button className="search-button">🔍</button>
        </div>
        <p className="forum-description">
          Al Hikmah Discussion Forum is established to connect Muslim Youth for discussions on various fields of expertise to become <span className="highlight">Intellectuals, Leaders</span> & <span className="highlight">Fateh of the World</span>.
        </p>
      </div>
    </div>
  );
};

export default DiscussionForum;
