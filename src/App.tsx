import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

// Lazy load the components
const HomePage = lazy(() => import('./pages/HomePage'));
const DiscussionForum = lazy(() => import('./pages/DiscussionForum'));
const BlogsAndArticlesPage = lazy(() => import('./pages/BlogsAndArticlesPage'));
const EventsPage = lazy(() => import('./pages/Events'));
const Login = lazy(() => import('./pages/Login'));

const App: React.FC = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/discussion-forum" element={<DiscussionForum />} />
              <Route path="/blogs" element={<BlogsAndArticlesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
