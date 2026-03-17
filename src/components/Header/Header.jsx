import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/image.png';

const Header = ({ setCurrentPage, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  // Simplified header for login page as requested in the image
  if (currentPage === 'login') {
    return (
      <header className="main-header login-header-variant">
        <div className="header-container">
          <div className="logo-section" style={{ cursor: 'pointer' }} onClick={() => handleNavClick('landing')}>
            <img src={logo} alt="Shiawomen.ai Logo" className="logo-img" />
            <h1 className="logo-text">Shiawomen.ai</h1>
          </div>

          <div className="language-selector">
            <div className="language-btn">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK flag" className="flag-icon" />
              <span>English</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-section" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Shiawomen.ai Logo" className="logo-img" />
          <h1 className="logo-text">Shiawomen.ai</h1>
        </div>

        <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        <div className={`header-right-group ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="header-nav">
            <a
              href="#!"
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Home
            </a>
            <a
              href="#!"
              className={`nav-link ${currentPage === 'browse' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('browse'); }}
            >
              Browse
            </a>
            <a
              href="#!"
              className={`nav-link ${currentPage === 'resources' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('resources'); }}
            >
              Resources & Content
            </a>
          </nav>

          <div className="header-actions">
            <button className="add-listing-btn" onClick={() => handleNavClick('select-plan')}>Add new listing</button>
            <button className="profile-btn" onClick={() => handleNavClick('user-profile-settings')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
