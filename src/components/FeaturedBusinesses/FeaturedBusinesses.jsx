import React from 'react';
import './FeaturedBusinesses.css';
import sabrImg from '../../assets/sabr therapy.jpg';
import maryamImg from '../../assets/maryam_bg.png';
import beautyImg from '../../assets/beauty_bg.png';
import abayaImg from '../../assets/abaya_bg.png';

const businesses = [
    {
        id: 1,
        title: 'Sabr Therapy Services',
        description: "Compassionate, faith-aware mental health support for women.",
        image: sabrImg,
        label: 'Featured Business'
    },
    {
        id: 2,
        title: 'Maryam Restaurant',
        description: "Compassionate, faith-aware mental health support for women.",
        image: maryamImg,
        label: 'Featured Business'
    },
    {
        id: 3,
        title: 'Al Saleh Beauty Saloon',
        description: "Compassionate beauty saloon for amazing women's from all over the globe.",
        image: beautyImg,
        label: 'Featured Business'
    },
    {
        id: 4,
        title: 'Online Abaya Store',
        description: "Compassionate, faith-aware mental health support for women.",
        image: abayaImg,
        label: 'Featured Business'
    }
];

const FeaturedBusinesses = () => {
    return (
        <section className="featured-businesses-section">
            <span className="section-label">Featured Businesses</span>
            <h2 className="featured-title">Featured Businesses</h2>
            <p className="featured-subtitle">
                Explore expert-backed articles covering early learning, reading habits, parenting tips, and creative activities for kids.
            </p>

            <div className="featured-grid">
                {businesses.map((business) => (
                    <div key={business.id} className="business-card">
                        <div className="business-card-bg">
                            <img src={business.image} alt={business.title} />
                        </div>
                        <div className="card-overlay">
                            <span className="card-label">{business.label}</span>
                            <div className="card-info">
                                <h3 className="card-title">{business.title}</h3>
                                <p className="card-description">{business.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedBusinesses;
