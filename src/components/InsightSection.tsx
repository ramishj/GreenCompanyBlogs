// InsightSection.tsx
import React, { useState } from 'react';
import './InsightSection.css';

interface InsightItem {
  image: string;
  title: string;
  description: string;
  date: string;
  writer: string;
  writerProfilePic: string;
  category: string;
}

const initialInsightsData: InsightItem[] = [
  {
    image: 'https://t.ly/TMVcW',
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Booketboks. Hanya perlu mengikuti beberapa langkah mudah.',
    date: '12 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY',
    category: 'Technology'
  },
  {
    image: 'https://t.ly/BOVWY',
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Booketboks. Hanya perlu mengikuti beberapa langkah mudah.',
    date: '12 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY',
    category: 'Marketing'
  },{
    image: 'https://t.ly/BOVWY',
    title: 'New Insight Title 2',
    description: 'Description for the new insight item 2.',
    date: '14 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY',
    category: 'Health'
  }
  // Add more initial insights as needed
];

const moreInsightsData: InsightItem[] = [
  {
    image: 'https://t.ly/BOVWY',
    title: 'New Insight Title 1',
    description: 'Description for the new insight item 1.',
    date: '13 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY',
    category: 'Business'
  },
  {
    image: 'https://t.ly/BOVWY',
    title: 'New Insight Title 2',
    description: 'Description for the new insight item 2.',
    date: '14 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY',
    category: 'Health'
  },
  {
    image: 'https://t.ly/BOVWY',
    title: 'New Insight Title 2',
    description: 'Description for the new insight item 2.',
    date: '14 Mar',
    writer: 'Ramish',
    writerProfilePic: 'https://t.ly/BOVWY',
    category: 'Health'
  }
  // Add more items as needed
];

const InsightSection: React.FC = () => {
  const [insightsData, setInsightsData] = useState<InsightItem[]>(initialInsightsData);
  const [category, setCategory] = useState<string>('all');

  const loadMoreInsights = () => {
    setInsightsData(prevInsights => [...prevInsights, ...moreInsightsData]);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const filteredInsights = category === 'all'
    ? insightsData
    : insightsData.filter(item => item.category === category);

  return (
    <section className="insights-section">
      <h2 className="section-title">Explore our Insights</h2>
      <div className="filters">
        <button className="filter-button" onClick={() => setCategory('all')}>All</button>
        <select className="filter-dropdown" value={category} onChange={handleCategoryChange}>
          <option value="all">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
        </select>
      </div>
      <div className="insights-grid">
        {filteredInsights.map((item, index) => (
          <div key={index} className="insight-item">
            <div className="insight-image-container">
              <img src={item.image} alt={item.title} className="insight-image" />
            </div>
            <div className="insight-details">
              <h3 className="insight-title">{item.title}</h3>
              <p className="insight-description">{item.description}</p>
              <div className="insight-writer">
                <img src={item.writerProfilePic} alt={item.writer} className="writer-profile-pic" />
                <p className="insight-writer-info">
                  <span className="insight-date">{item.date}</span> - <span className="writer-name">{item.writer}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="load-more-button" onClick={loadMoreInsights}>Load More</button>
    </section>
  );
};

export default InsightSection;
