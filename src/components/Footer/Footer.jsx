import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-copyright-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="copyright-icon-circle">
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M14.5 9.2a3.5 3.5 0 1 0 0 5.6"></path>
                        </svg>
                        <span className="footer-copyright-text">Copyright 2025, All rights reserved</span>
                    </div>
                </div>
                <div className="footer-right">
                    <a href="#!" className="footer-link">Privacy Policy</a>
                    <a href="#!" className="footer-link">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
