import React, { useState } from 'react';
import './Resources.css';
import understandingImg1 from '../../assets/understanding.jpg';
import understandingImg2 from '../../assets/understanding1.jpg';
import understandingImg3 from '../../assets/understanding2.jpg';
import avatarImg from '../../assets/profile.jpg';

const categories = [
    "Mental Health",
    "Faith",
    "Well - Being",
    "Physical Health",
    "Mediation"
];

const articles = [
    { id: 1, title: "How Community Support Strengthens Shia Women Entrepreneurs", image: understandingImg1, date: "December 23, 2025", author: "Christopher Henry" },
    { id: 2, title: "How Community Support Strengthens Shia Women Entrepreneurs", image: understandingImg2, date: "December 23, 2025", author: "Christopher Henry" },
    { id: 3, title: "How Community Support Strengthens Shia Women Entrepreneurs", image: understandingImg3, date: "December 23, 2025", author: "Christopher Henry" },
    { id: 4, title: "How Community Support Strengthens Shia Women Entrepreneurs", image: understandingImg1, date: "December 23, 2025", author: "Christopher Henry" },
    { id: 5, title: "How Community Support Strengthens Shia Women Entrepreneurs", image: understandingImg2, date: "December 23, 2025", author: "Christopher Henry" },
];

const Resources = ({ onArticleClick }) => {
    const [activeCategory, setActiveCategory] = useState("Faith");

    return (
        <div className="resources-page">
            <header className="resources-header">
                <h1 className="resources-title">Resources & Content</h1>
                <p className="resources-subtitle">
                    Discover trusted, women-led businesses within the Shia community.
                </p>

                <div className="resources-filter-container">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            className={`resource-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <div className="resources-content">
                <div className="resource-grid">
                    {articles.map((article) => (
                        <div 
                            key={article.id} 
                            className="resource-card"
                            onClick={() => onArticleClick(article)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="resource-image-wrapper">
                                <img src={article.image} alt={article.title} className="resource-img" />
                                <div className="author-avatar">
                                    <img src={avatarImg} alt="Author" />
                                </div>
                            </div>
                            <div className="resource-info">
                                <h3 className="resource-card-title">{article.title}</h3>
                                <p className="resource-card-desc">Compassionate, faith-aware mental health support for women.</p>
                                <div className="resource-tags">
                                    <span className="res-tag">Well-Being</span>
                                    <span className="res-tag">Mental Health</span>
                                    <span className="res-tag">Well-Being</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
