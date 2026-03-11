import React, { useState } from 'react';
import './Landing.css';

const Landing = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGoToApp = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="landing-page modern-minimal">
      {/* Header Section */}
      <header className="landing-header">
        <div className="landing-logo" onClick={handleGoToApp}>
          Shiawomen.ai
        </div>
        
        <button className="landing-hamburger" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        <nav className={`landing-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="landing-hero" id="home">
        <div className="hero-content">
          <h1>Empower Women-Led Businesses in a Faith-Aligned Space</h1>
          <p>Connect and access guidance within a safe, community-centered space</p>
          
          <div className="hero-search-bar">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Enter your suburb" className="search-input" />
            <button className="search-btn">Search</button>
          </div>

          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={handleGoToApp}>Explore</button>
            <button className="hero-btn-secondary" onClick={handleGoToApp}>Get Started</button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <span>Hero Image Placeholder (hero-image.png)</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="landing-categories" id="services">
        <h2>Popular Categories</h2>
        <div className="categories-flex">
          <div className="category-item">
            <div className="category-icon">🍔</div>
            <span className="category-title">Food</span>
          </div>
          <div className="category-item">
            <div className="category-icon">🛠️</div>
            <span className="category-title">Trades</span>
          </div>
          <div className="category-item">
            <div className="category-icon">💼</div>
            <span className="category-title">Services</span>
          </div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="landing-featured">
        <h2>Featured Businesses</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-img-placeholder">sabr.png</div>
            <div className="featured-card-content">
              <h3>Sabr Therapy Services</h3>
              <p>Faith-aligned mental health support for women</p>
            </div>
          </div>
          {/* Duplicating for grid demonstration */}
          <div className="featured-card">
            <div className="featured-img-placeholder">business.png</div>
            <div className="featured-card-content">
              <h3>Modest Wear Boutique</h3>
              <p>Elegant and modest clothing for all occasions</p>
            </div>
          </div>
          <div className="featured-card">
            <div className="featured-img-placeholder">event.png</div>
            <div className="featured-card-content">
              <h3>Halal Catering Co.</h3>
              <p>Delicious halal catering for community events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="landing-footer" id="contact">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <div className="social-icon">F</div>
            <div className="social-icon">T</div>
            <div className="social-icon">L</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Shiawomen.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
