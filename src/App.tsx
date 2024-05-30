import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Lazy load the components
const HomePage = lazy(() => import('./pages/HomePage'));
const DiscussionForum = lazy(() => import('./pages/DiscussionForum'));
const BlogsAndArticlesPage = lazy(() => import('./pages/BlogsAndArticlesPage'));

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/discussion-forum' element={<DiscussionForum />} />
            <Route path="/blogs" element={<BlogsAndArticlesPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
