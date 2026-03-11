import React from 'react';
import './ResourceDetails.css';
import articleImg from '../../assets/understanding2.jpg';
import avatarImg from '../../assets/profile.jpg';

const ResourceDetails = ({ article, onBack, navigateToPlan }) => {
    // Merge passed article with defaults to ensure all fields are populated
    const content = {
        title: article?.title || "How Community Support Strengthens Shia Women Entrepreneurs",
        date: article?.date || "December 23, 2025",
        author: article?.author || "Christopher Henry",
        image: article?.image || articleImg
    };

    const handleRelatedClick = () => {
        navigateToPlan();
        window.scrollTo(0, 0);
    };

    return (
        <div className="resource-details-page">
            <div className="res-details-container">
                {/* Breadcrumbs */}
                <nav className="res-breadcrumbs">
                    <span onClick={() => onBack('home')} className="res-breadcrumb-link">Home</span>
                    <span className="res-breadcrumb-separator">»</span>
                    <span onClick={() => onBack('resources')} className="res-breadcrumb-link">Resources & Content</span>
                    <span className="res-breadcrumb-separator">»</span>
                    <span className="res-breadcrumb-current">How Community supports...</span>
                </nav>

                <header className="res-details-header">
                    <h1 className="res-details-title">
                        How Community Support Strengthens <br />
                        Shia Women Entrepreneurs
                    </h1>
                    
                    <div className="res-meta-info">
                        <div className="res-meta-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E4A607" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>{content.date}</span>
                        </div>
                        <div className="res-meta-divider"></div>
                        <div className="res-meta-item">
                            <img src={avatarImg} alt={content.author} className="author-small-avatar" />
                            <span>{content.author}</span>
                        </div>
                    </div>
                </header>

                <div className="res-main-image-wrapper">
                    <img src={content.image} alt={content.title} className="res-main-img" />
                </div>

                <article className="res-article-body">
                    <p>Building a business as a woman comes with both opportunity and challenge. For many Shia women, entrepreneurship is not only about financial independence — it is also about purpose, service, and contributing meaningfully to the community.</p>
                    
                    <p>However, the journey can often feel isolating. Limited access to networks, lack of mentorship, and balancing family responsibilities are common realities. This is where structured community support becomes essential.</p>

                    <hr className="res-section-divider" />

                    <section className="res-split-section">
                        <div className="res-split-image">
                            {/* Placeholder for section image */}
                            <div className="res-placeholder-box"></div>
                        </div>
                        <div className="res-split-content">
                            <h2 className="res-section-title">Why Community Matters in Business</h2>
                            <p>Entrepreneurship thrives in environments where collaboration, not competition, is encouraged. When women connect with other women who understand their values, experiences, and faith-based considerations, several things happen:</p>
                            <ul className="res-bullet-list">
                                <li>Confidence grows</li>
                                <li>Decision-making improves</li>
                                <li>Accountability strengthens</li>
                                <li>Opportunities expand</li>
                            </ul>
                            <p>A supportive community provides not just referrals or customers, but emotional reinforcement — especially during slow seasons or moments of self-doubt.</p>
                        </div>
                    </section>

                    <hr className="res-section-divider" />

                    <section className="res-full-section">
                        <h2 className="res-section-title">Faith and Business: A Balanced Approach</h2>
                        <p>For many Shia women, business decisions are guided by ethical and religious principles. Questions about halal income, fair pricing, modest branding, and professional boundaries are often part of the process.</p>
                        <p>Operating within faith-based values can actually become a strength. It builds trust, clarity, and long-term credibility. Customers increasingly seek businesses that demonstrate integrity and transparency.</p>
                        <p>When faith and professionalism align, businesses become sustainable and purpose-driven.</p>
                    </section>

                    <hr className="res-section-divider" />

                    <section className="res-full-section">
                        <h2 className="res-section-title">Mentorship and Shared Experience</h2>
                        <p>Mentorship does not always have to be formal. Sometimes, it looks like:</p>
                        <ul className="res-bullet-list">
                            <li>Learning from another woman's journey</li>
                            <li>Asking practical questions in a safe forum</li>
                            <li>Observing how others handle growth and setbacks</li>
                        </ul>
                        <p>Shared experience reduces fear. When one woman succeeds, it signals possibility for others.</p>
                    </section>
                </article>

                <div className="related-resources-section">
                    <div className="related-header">
                        <span className="recommendation-badge">Recommendations</span>
                        <h2 className="related-title">Related Blogs & Articles</h2>
                        <p className="related-subtitle">Explore expert-backed articles covering early learning, reading habits, parenting tips, and creative activities for kids.</p>
                    </div>

                    <div className="related-resource-grid">
                        {[1, 2, 3].map((id) => (
                            <div 
                                key={id} 
                                className="resource-card"
                                onClick={handleRelatedClick}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="resource-image-wrapper">
                                    <img src={id === 1 ? articleImg : id === 2 ? articleImg : articleImg} alt="Article" className="resource-img" />
                                    <div className="author-avatar">
                                        <img src={avatarImg} alt="Author" />
                                    </div>
                                </div>
                                <div className="resource-info">
                                    <h3 className="resource-card-title">Understanding Basic Fiqh for Everyday Life</h3>
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
        </div>
    );
};

export default ResourceDetails;
