import React from 'react';
import './Header.css';
import logo from '../../assets/image.png';

const Header = ({ setCurrentPage, currentPage }) => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-section" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Shiawomen.ai Logo" className="logo-img" />
          <h1 className="logo-text">Shiawomen.ai</h1>
        </div>

        <div className="header-right-group">
          <nav className="header-nav">
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
            >
              Home
            </a>
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'browse' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setCurrentPage('browse'); }}
            >
              Browse
            </a>
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'resources' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setCurrentPage('resources'); }}
            >
              Resources & Content
            </a>
          </nav>

          <div className="header-actions">
            <button className="add-listing-btn">Add new listing</button>
            <button className="profile-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
