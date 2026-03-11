import React from 'react';
import './MobileAppSection.css';
import mobilePhones from '../../assets/mobile image.png';

const MobileAppSection = () => {
    return (
        <section className="mobile-app-section">
            <div className="mobile-app-map-bg"></div>
            
            <div className="mobile-app-content">
                <h2 className="mobile-app-title">
                    A Safe Digital Space —<br /> Now Mobile
                </h2>
                <p className="mobile-app-subtitle">
                    Download the ShiaWomen.ai app to explore women-led businesses, access trusted
                    resources, and receive supportive guidance on the go.
                </p>
                
                <div className="store-buttons">
                    <a href="#!" className="store-link">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                            alt="App Store" 
                            className="store-badge"
                        />
                    </a>
                    <a href="#!" className="store-link">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                            alt="Google Play" 
                            className="store-badge"
                        />
                    </a>
                </div>
            </div>

            <div className="mobile-phones-container">
                <img 
                    src={mobilePhones} 
                    alt="ShiaWomen.ai Mobile App" 
                    className="mobile-mock-img" 
                />
            </div>
        </section>
    );
};

export default MobileAppSection;
