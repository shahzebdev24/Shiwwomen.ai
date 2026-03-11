import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="copyright-icon"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M15 9.354a4 4 0 1 0 0 5.292"></path>
                    </svg>
                    <span className="copyright-text">Copyright 2025, All rights reserved</span>
                </div>
                <div className="footer-right">
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
