import React from 'react';
import './Browse.css';
import Sidebar from './Sidebar/Sidebar';
import AddBusiness from '../AddBusiness/AddBusiness';
import nourImg from '../../assets/nourwellnes.jpg';
import abayaImg from '../../assets/abaya.jpg';
import salonImg from '../../assets/Alsalehbeautysaloon.jpg';
import sabrImg from '../../assets/sabr therapy.jpg';

const Browse = ({ onBusinessClick }) => {
    const businesses = [
        {
            id: 1,
            name: "Nour Wellness & Counseling",
            description: "Compassionate, faith-aware mental health support for women.",
            location: "Riyadh , Saudia Arabia",
            image: nourImg,
            category: "Education",
            tags: ["Shia-aligned", "Featured"]
        },
        {
            id: 2,
            name: "Nour Wellness & Counseling",
            description: "Compassionate, faith-aware mental health support for women.",
            location: "Riyadh , Saudia Arabia",
            image: abayaImg,
            category: "Fashion",
            tags: ["Shia-aligned", "Featured"]
        },
        {
            id: 3,
            name: "Nour Wellness & Counseling",
            description: "Compassionate, faith-aware mental health support for women.",
            location: "Riyadh , Saudia Arabia",
            image: salonImg,
            category: "Beauty",
            tags: ["Shia-aligned", "Featured"]
        },
        {
            id: 4,
            name: "Nour Wellness & Counseling",
            description: "Compassionate, faith-aware mental health support for women.",
            location: "Riyadh , Saudia Arabia",
            image: sabrImg,
            category: "Health",
            tags: ["Shia-aligned", "Featured"]
        },
        {
            id: 5,
            name: "Nour Wellness & Counseling",
            description: "Compassionate, faith-aware mental health support for women.",
            location: "Riyadh , Saudia Arabia",
            image: nourImg,
            category: "Education",
            tags: ["Shia-aligned", "Featured"]
        },
        {
            id: 6,
            name: "Nour Wellness & Counseling",
            description: "Compassionate, faith-aware mental health support for women.",
            location: "Riyadh , Saudia Arabia",
            image: nourImg,
            category: "Education",
            tags: ["Shia-aligned", "Featured"]
        }
    ];

    return (
        <div className="browse-page">
            <header className="browse-header">
                <h1 className="browse-title">Browse Businesses</h1>
                <p className="browse-subtitle">Discover trusted, women-led businesses within the Shia community.</p>
                
                <div className="search-bar-container">
                    <div className="search-box">
                        <div className="search-field">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="I'm looking for ..." />
                        </div>
                        <div className="search-field">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <input type="text" placeholder="Enter your suburb" />
                        </div>
                        <button className="search-icon-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="browse-content">
                <Sidebar />
                <main className="business-grid">
                    {businesses.map((biz) => (
                        <div 
                            key={biz.id} 
                            className="business-card"
                            onClick={() => onBusinessClick(biz)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-image-wrapper">
                                <img src={biz.image} alt={biz.name} className="card-image" />
                                <div className="location-badge">
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.05 4.05002C5.70002 3.39993 6.47172 2.88425 7.32105 2.53242C8.17037 2.1806 9.08068 1.99951 10 1.99951C10.9193 1.99951 11.8296 2.1806 12.6789 2.53242C13.5283 2.88425 14.3 3.39993 14.95 4.05002C16.263 5.36378 17.0005 7.14514 17.0005 9.00252C17.0005 10.8599 16.263 12.6413 14.95 13.955L13.822 15.069L11.387 17.439C11.0372 17.7775 10.5756 17.9764 10.0894 17.9981C9.60306 18.0199 9.1256 17.863 8.747 17.557L8.614 17.439L6.571 15.454L5.051 13.955C3.73833 12.6413 3.00098 10.8601 3.00098 9.00302C3.00098 7.14589 3.73833 5.36473 5.051 4.05102M10 6.50002C9.33696 6.50002 8.70107 6.76341 8.23223 7.23225C7.76339 7.70109 7.5 8.33698 7.5 9.00002C7.5 9.66306 7.76339 10.2989 8.23223 10.7678C8.70107 11.2366 9.33696 11.5 10 11.5C10.663 11.5 11.2989 11.2366 11.7678 10.7678C12.2366 10.2989 12.5 9.66306 12.5 9.00002C12.5 8.33698 12.2366 7.70109 11.7678 7.23225C11.2989 6.76341 10.663 6.50002 10 6.50002Z" fill="#CF1B2B" />
                                    </svg>
                                    {biz.location}
                                </div>
                                <button className="wishlist-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>{biz.name}</h3>
                                <p>{biz.description}</p>
                                <div className="card-bottom">
                                    <span className="tag shia-tag">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4A607" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        </svg>
                                        Shia-aligned
                                    </span>
                                    <span className="tag featured-tag">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4A607" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                        Featured
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
            <AddBusiness />
        </div>
    );
};

export default Browse;
