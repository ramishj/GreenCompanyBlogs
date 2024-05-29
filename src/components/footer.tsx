import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="about-us">
            <h2>Alhikmah</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa porro et eveniet, eaque aperiam repudiandae nisi molestias, sequi minima id est nam blanditiis voluptates temporibus animi, pariatur excepturi nesciunt voluptatem.</p>
          </div>
          <div className="footer-menu">
            <h4>Plan Events</h4>
            <ul>
              <li><a href="#">Create and Set Up</a></li>
              <li><a href="#">Sell Tickets</a></li>
              <li><a href="#">Online RSVP</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Stay In The Loop</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Join our mailing list to stay in the loop with our newest features and events</a></li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="copyright-text">
          <p>Copyright © 2024 RamishJamal</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
