import React, { useState } from 'react';
import InsightSection from "../components/InsightSection"
import './BlogsAndArticlesPage.css';

interface SpotlightItem {
  image: string;
  title: string;
  description: string;
  date: string;
  writer: string;
  writerProfilePic: string;
}

interface TrendingItem {
  title: string;
  description: string;
  date: string;
  writer: string;
  writerProfilePic: string;
}

const spotlightData: SpotlightItem = {
  image: 'https://t.ly/BOVWY',
  title: 'How can people stop any War happening in the world?',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, nisl eget facilisis ullamcorper, dolor arcu gravida nisl, in suscipit ligula magna sit amet elit.',
  date: '12 Mar',
  writer: 'Ramish',
  writerProfilePic: 'https://t.ly/BOVWY'
};

const trendingData: TrendingItem[] = [
  {
    title: 'Social Media Marketing and its trends in 2024',
    description: 'How to Ace the Social Media in just few steps. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY'
  },
  {
    title: 'Emerging Technologies and Economies',
    description: 'How to leverage technology for economic growth. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY'
  },
  // Add more trending items as needed
];

const BlogsAndArticlesPage: React.FC = () => {
  return (
    <div className="blogs-and-articles-page">
      <header className="page-header">
        <h1 className="page-title">
          Blogs and <span className="highlight">Articles</span>
        </h1>
        <p className="page-subtitle">
          Explore our precious reports, blogs and articles to increase your knowledge prepared by Industry leaders and Experts and Influential Muslim Personalities.
        </p>
      </header>

      <div className="main-content">
        <section className="spotlight-section">
          <h2 className="section-title">Spotlight</h2>
          <div className="spotlight-content">
            <img src={spotlightData.image} alt="Spotlight" className="spotlight-image" />
            <div className="spotlight-text">
              <h3 className="spotlight-title">{spotlightData.title}</h3>
              <p className="spotlight-description">{spotlightData.description}</p>
              <div className="spotlight-writer">
                <img src={spotlightData.writerProfilePic} alt={spotlightData.writer} className="writer-profile-pic" />
                <p className="spotlight-writer-info">
                  <span className="spotlight-date">{spotlightData.date}</span> - <span className="writer-name">{spotlightData.writer}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="trending-section">
          <h2 className="section-title">Trending</h2>
          <ul className="trending-list">
            {trendingData.map((item, index) => (
              <li key={index} className="trending-item">
                <h3 className="trending-title">{item.title}</h3>
                <p className="trending-description">{item.description}</p>
                <div className="trending-writer">
                  <img src={item.writerProfilePic} alt={item.writer} className="writer-profile-pic" />
                  <p className="trending-writer-info">
                    <span className="trending-date">{item.date}</span> - <span className="writer-name">{item.writer}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <InsightSection />
    </div>
  );
};

export default BlogsAndArticlesPage;
