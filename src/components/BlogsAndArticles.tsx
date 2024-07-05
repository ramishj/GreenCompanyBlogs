import React from 'react';
import './BlogsAndArticles.css';

const articles = [
  {
    title: 'Article 1',
    author: 'Author 1',
    description: 'Description of article 1.',
    imageUrl: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Article 2',
    author: 'Author 2',
    description: 'Description of article 2.',
    imageUrl: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },{
    title: 'Article 3',
    author: 'Author 3',
    description: 'Description of article 3.',
    imageUrl: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
