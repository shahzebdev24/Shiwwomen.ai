import React from 'react';
import './NearbyBusinesses.css';
import nourImg from '../../assets/nour_bg.png';
import alsalehImg from '../../assets/beauty_bg.png';
import abayaImg from '../../assets/abaya_bg.png';

const nearbyBusinesses = [
    {
        id: 1,
        title: 'Nour Wellness & Counseling',
        description: 'Compassionate, faith-aware mental health support for women.',
        image: nourImg,
        location: 'Riyadh, Saudia Arabia',
        tags: ['Shia-aligned', 'Featured']
    },
    {
        id: 2,
        title: 'Al Saleh Beauty Saloon',
        description: 'Compassionate, faith-aware mental health support for women.',
        image: alsalehImg,
        location: 'Riyadh, Saudia Arabia',
        tags: ['Shia-aligned', 'Featured']
    },
    {
        id: 3,
        title: 'Online Abaya Store',
        description: 'Compassionate, faith-aware mental health support for women.',
        image: abayaImg,
        location: 'Riyadh, Saudia Arabia',
        tags: ['Shia-aligned', 'Featured']
    }
];

const NearbyBusinesses = () => {
    return (
        <section className="nearby-businesses-section">
            <span className="nearby-label">Nearby Businesses</span>
            <h2 className="nearby-title">Premium Businesses Near You</h2>
            <p className="nearby-subtitle">
                Explore expert-backed articles covering early learning, reading habits, parenting tips, and creative activities for kids.
            </p>

            <div className="nearby-grid">
                {nearbyBusinesses.map((item) => (
                    <div key={item.id} className="nearby-card">
                        <div className="nearby-image-wrapper">
                            <img src={item.image} alt={item.title} />
                            <div className="location-badge">
                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.05 4.05002C5.70002 3.39993 6.47172 2.88425 7.32105 2.53242C8.17037 2.1806 9.08068 1.99951 10 1.99951C10.9193 1.99951 11.8296 2.1806 12.6789 2.53242C13.5283 2.88425 14.3 3.39993 14.95 4.05002C16.263 5.36378 17.0005 7.14514 17.0005 9.00252C17.0005 10.8599 16.263 12.6413 14.95 13.955L13.822 15.069L11.387 17.439C11.0372 17.7775 10.5756 17.9764 10.0894 17.9981C9.60306 18.0199 9.1256 17.863 8.747 17.557L8.614 17.439L6.571 15.454L5.051 13.955C3.73833 12.6413 3.00098 10.8601 3.00098 9.00302C3.00098 7.14589 3.73833 5.36473 5.051 4.05102M10 6.50002C9.33696 6.50002 8.70107 6.76341 8.23223 7.23225C7.76339 7.70109 7.5 8.33698 7.5 9.00002C7.5 9.66306 7.76339 10.2989 8.23223 10.7678C8.70107 11.2366 9.33696 11.5 10 11.5C10.663 11.5 11.2989 11.2366 11.7678 10.7678C12.2366 10.2989 12.5 9.66306 12.5 9.00002C12.5 8.33698 12.2366 7.70109 11.7678 7.23225C11.2989 6.76341 10.663 6.50002 10 6.50002Z" fill="#CF1B2B" />
                                </svg>
                                {item.location}
                            </div>
                            <button className="heart-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="nearby-card-info">
                            <h3 className="nearby-card-title">{item.title}</h3>
                            <p className="nearby-card-desc">{item.description}</p>
                            <div className="nearby-tags">
                                <span className="nearby-tag">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4A607" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                    Shia-aligned
                                </span>
                                <div className="tag-separator"></div>
                                <span className="nearby-tag">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4A607" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                    Featured
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="progress-bar-container">
                <div className="progress-bar-fill"></div>
            </div>
        </section>
    );
};

export default NearbyBusinesses;
