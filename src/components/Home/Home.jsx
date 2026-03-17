import React from 'react';
import './Home.css';
import PopularCategories from '../PopularCategories/PopularCategories';
import FeaturedBusinesses from '../FeaturedBusinesses/FeaturedBusinesses';
import MobileAppSection from '../MobileAppSection/MobileAppSection';
import NearbyBusinesses from '../NearbyBusinesses/NearbyBusinesses';
import AddBusiness from '../AddBusiness/AddBusiness';
import FeaturedBlogs from '../FeaturedBlogs/FeaturedBlogs';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-map-background"></div>

            <div className="home-content">
                <h1 className="home-title">
                    Discover Women-Led<br />
                    Businesses in a <span className="highlight-text">Faith-</span><br />
                    <span className="highlight-text">Aligned Space</span>
                </h1>

                <p className="home-subtitle">
                    Discover women-led businesses, access faith-aware guidance, and connect within
                    a safe, community-centered space.
                </p>

                <div className="search-container">
                    <div className="search-input-group">
                        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input type="text" placeholder="I'm looking for ..." className="search-input" />
                    </div>

                    <div className="search-input-group">
                        <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="10" r="3" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input type="text" placeholder="Enter your suburb" className="search-input" />
                    </div>

                    <button className="search-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <p className="owner-text">
                    Are you a business owner? <a href="#!" className="submit-listing-link">Submit your listing</a>
                </p>
            </div>

            <PopularCategories />
            <FeaturedBusinesses />
            <MobileAppSection />
            <NearbyBusinesses />
            <AddBusiness />
            <FeaturedBlogs />
        </div>
    );
};

export default Home;
