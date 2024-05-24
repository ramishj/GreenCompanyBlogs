// src/BlogsAndArticles.js
import React from 'react';
import './BlogsAndArticles.css';

const articles = [
  {
    title: 'Article 1',
    author: 'Author 1',
    description: 'Description of article 1.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    title: 'Article 2',
    author: 'Author 2',
    description: 'Description of article 2.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    title: 'Article 3',
    author: 'Author 3',
    description: 'Description of article 3.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    title: 'Article 4',
    author: 'Author 4',
    description: 'Description of article 4.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  },
];

const BlogsAndArticles = () => {
  return (
    <div className="blogs-and-articles">
      <div className="header">
        <div className="underline"></div>
        <h2 className="blue-text">BLOGS AND ARTICLES</h2>
      </div>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <img src={article.imageUrl} alt={article.title} />
            <h3>{article.title}</h3>
            <p><strong>Author:</strong> {article.author}</p>
            <p>{article.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsAndArticles;
