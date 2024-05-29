import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import DiscussionForum from './pages/DiscussionForum';
import BlogsAndArticlesPage from './pages/BlogsAndArticlesPage';
const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/discussion-forum' element={<DiscussionForum />} />
        <Route path="/blogs" element={<BlogsAndArticlesPage />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
