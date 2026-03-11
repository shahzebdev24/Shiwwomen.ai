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
            <button className="add-listing-btn">Add new listing</button>
            <button className="profile-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
