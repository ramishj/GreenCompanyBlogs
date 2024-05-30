import React from 'react';
import './BlogsAndArticles.css';

const articles = [
  {
    title: 'Article 1',
    author: 'Author 1',
    description: 'Description of article 1.',
    imageUrl: 'https://shorturl.at/0126e',
  },
  {
    title: 'Article 2',
    author: 'Author 2',
    description: 'Description of article 2.',
    imageUrl: 'https://shorturl.at/0126e',
  },{
    title: 'Article 2',
    author: 'Author 2',
    description: 'Description of article 2.',
    imageUrl: 'https://shorturl.at/0126e',
  }
  // Rest of the articles...
];

const BlogsAndArticles = () => {
  const redirectToBlogsPage = () => {
    window.location.href = "/blogs";
  };

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
      <button className="load-more-btn" onClick={redirectToBlogsPage}>Load More</button>
    </div>
  );
};

export default BlogsAndArticles;
