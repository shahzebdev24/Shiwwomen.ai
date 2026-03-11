import React from 'react';
import './LoggedInFooter.css';
import logo from '../../assets/image.png';

const LoggedInFooter = () => {
    return (
        <footer className="logged-in-footer">
            <div className="footer-main-content">
                <div className="footer-brand-section">
                    <div className="footer-logo-container">
                        <img src={logo} alt="ShiaWomen.ai Logo" className="footer-logo-img" />
                    </div>
                    <p className="footer-tagline">
                        ShiaWomen.ai is a dedicated digital space supporting Shia women through connection, guidance, and women-led businesses.
                    </p>
                    <div className="footer-store-badges">
                        <a href="#" className="footer-store-link">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                alt="App Store" 
                                className="footer-store-badge"
                            />
                        </a>
                        <a href="#" className="footer-store-link">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                alt="Google Play" 
                                className="footer-store-badge"
                            />
                        </a>
                    </div>
                </div>

                <div className="footer-links-col">
                    <h3>COMPANY</h3>
                    <ul className="footer-nav-list">
                        <li><a href="#!" className="footer-nav-link">Home</a></li>
                        <li><a href="#!" className="footer-nav-link">Browse</a></li>
                        <li><a href="#!" className="footer-nav-link">List your Business</a></li>
                        <li><a href="#!" className="footer-nav-link">Blogs & Articles</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter-section">
                    <h3>NEWSLETTER</h3>
                    <div className="newsletter-form">
                        <div className="newsletter-input-group">
                            <label>Email address</label>
                            <input 
                                type="email" 
                                className="newsletter-input" 
                                placeholder="Kevinbacker23@gmail.com" 
                            />
                        </div>
                        <button className="newsletter-submit-btn">Submit</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <p className="copyright-text">
                    © Copyright 2025, All Rights Reserved by Shiawomen.ai
                </p>
            </div>
        </footer>
    );
};

export default LoggedInFooter;
