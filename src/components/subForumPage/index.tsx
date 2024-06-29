import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './styles.css';
import userAvatar from '../../assets/icons8-male-user-ios-17-filled-96.png';

interface Topic {
  title: string;
  author: string;
  date: string;
  views: string;
  replies: string;
}

const SubForum: React.FC = () => {
  const [subForumName, setSubForumName] = useState<string>('Sub-Forum Topic');
  const [topics, setTopics] = useState<Topic[]>([]);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const topicsPerPage = 10;

  useEffect(() => {
    const subForum = searchParams.get('subForum') || 'Sub-Forum Topic';
    setSubForumName(subForum);

    const fetchedTopics = Array.from({ length: 20 }, (_, index) => ({
      title: "How Gravity works?",
      author: "Junaid al Hindi",
      date: "Tuesday, 06-06-2024, 01:08 PM",
      views: "1k",
      replies: "133"
    }));
    setTopics(fetchedTopics);
  }, [searchParams]);

  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);
  const totalPages = Math.ceil(topics.length / topicsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="sub-forum">
        <div className="sub-forum-header">
          <h1>{subForumName}</h1>
          <p>Mechanics, thermodynamics, electromagnetism, optics, acoustics etc...</p>
          <button className="share-button">Share This Subforum</button>
        </div>
      </div>
      <div className="discussion-topics">
        <h2>Discussion Topics</h2>
        <div className="actions">
          <button className="new-topic-button">Start a New Discussion Topic</button>
          <button className="sort-button">Sort By</button>
        </div>
        <div className="topics-list">
          {currentTopics.map((topic, index) => (
            <div key={index} className="topic-item">
              <img src={userAvatar} alt="avatar" className="avatar" />
              <div className="topic-details">
                <p className="topic-title">{topic.title}</p>
                <p className="topic-meta">By {topic.author} on {topic.date}</p>
              </div>
              <div className="views-replies">
                <span>{topic.views} Views</span>
                <span>{topic.replies} Replies</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="next-button"
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubForum;
