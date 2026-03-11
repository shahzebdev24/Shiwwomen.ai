import React from 'react';
import './BusinessDetails.css';
import AddBusiness from '../AddBusiness/AddBusiness';
import detailImg from '../../assets/nourwellnes.jpg'; // Using the same image for now

const BusinessDetails = ({ business, onBack }) => {
    // For now using the passed business or a default one if none provided
    const biz = business || {
        name: "Nour Wellness & Counselling",
        location: "Riyadh , Saudi Arabia",
        category: "Education",
        image: detailImg
    };

    return (
        <div className="business-details-page">
            <div className="details-container">
                {/* Breadcrumbs */}
                <nav className="breadcrumbs">
                    <span onClick={onBack} className="breadcrumb-link">Home</span>
                    <span className="breadcrumb-separator">»</span>
                    <span onClick={onBack} className="breadcrumb-link">Browse</span>
                    <span className="breadcrumb-separator">»</span>
                    <span className="breadcrumb-link">{biz.category}</span>
                    <span className="breadcrumb-separator">»</span>
                    <span className="breadcrumb-current">{biz.name}</span>
                </nav>

                {/* Header Section */}
                <div className="details-header">
                    <div className="header-left">
                        <h1 className="details-title">{biz.name}</h1>
                        <div className="details-location">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.05 4.05002C5.70002 3.39993 6.47172 2.88425 7.32105 2.53242C8.17037 2.1806 9.08068 1.99951 10 1.99951C10.9193 1.99951 11.8296 2.1806 12.6789 2.53242C13.5283 2.88425 14.3 3.39993 14.95 4.05002C16.263 5.36378 17.0005 7.14514 17.0005 9.00252C17.0005 10.8599 16.263 12.6413 14.95 13.955L13.822 15.069L11.387 17.439C11.0372 17.7775 10.5756 17.9764 10.0894 17.9981C9.60306 18.0199 9.1256 17.863 8.747 17.557L8.614 17.439L6.571 15.454L5.051 13.955C3.73833 12.6413 3.00098 10.8601 3.00098 9.00302C3.00098 7.14589 3.73833 5.36473 5.051 4.05102M10 6.50002C9.33696 6.50002 8.70107 6.76341 8.23223 7.23225C7.76339 7.70109 7.5 8.33698 7.5 9.00002C7.5 9.66306 7.76339 10.2989 8.23223 10.7678C8.70107 11.2366 9.33696 11.5 10 11.5C10.663 11.5 11.2989 11.2366 11.7678 10.7678C12.2366 10.2989 12.5 9.66306 12.5 9.00002C12.5 8.33698 12.2366 7.70109 11.7678 7.23225C11.2989 6.76341 10.663 6.50002 10 6.50002Z" fill="#CF1B2B" />
                            </svg>
                            {biz.location}
                        </div>
                    </div>
                    <button className="map-btn">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.05 4.05002C5.70002 3.39993 6.47172 2.88425 7.32105 2.53242C8.17037 2.1806 9.08068 1.99951 10 1.99951C10.9193 1.99951 11.8296 2.1806 12.6789 2.53242C13.5283 2.88425 14.3 3.39993 14.95 4.05002C16.263 5.36378 17.0005 7.14514 17.0005 9.00252C17.0005 10.8599 16.263 12.6413 14.95 13.955L13.822 15.069L11.387 17.439C11.0372 17.7775 10.5756 17.9764 10.0894 17.9981C9.60306 18.0199 9.1256 17.863 8.747 17.557L8.614 17.439L6.571 15.454L5.051 13.955C3.73833 12.6413 3.00098 10.8601 3.00098 9.00302C3.00098 7.14589 3.73833 5.36473 5.051 4.05102M10 6.50002C9.33696 6.50002 8.70107 6.76341 8.23223 7.23225C7.76339 7.70109 7.5 8.33698 7.5 9.00002C7.5 9.66306 7.76339 10.2989 8.23223 10.7678C8.70107 11.2366 9.33696 11.5 10 11.5C10.663 11.5 11.2989 11.2366 11.7678 10.7678C12.2366 10.2989 12.5 9.66306 12.5 9.00002C12.5 8.33698 12.2366 7.70109 11.7678 7.23225C11.2989 6.76341 10.663 6.50002 10 6.50002Z" fill="#CF1B2B" />
                        </svg>
                        View Direction on Map
                    </button>
                </div>

                {/* Banner Image */}
                <div className="details-banner">
                    <img src={biz.image} alt={biz.name} className="banner-img" />
                </div>

                {/* Main Content Grid */}
                <div className="details-main-grid">
                    <div className="details-left-content">
                        <section className="info-section">
                            <h2>About Us</h2>
                            <p>Nour Wellness & Counseling is a women-led mental health practice dedicated to supporting women in a safe, compassionate, and culturally aware environment. We provide professional counseling services tailored to those navigating anxiety, emotional overwhelm, life transitions, and personal growth.</p>
                            <p>Our approach combines evidence-based therapeutic methods with sensitivity to faith, identity, and lived experience. We understand the unique challenges many women face and strive to create a space where clients feel heard without judgment.</p>
                            <p>Whether you are seeking clarity, healing, or personal development, our goal is to empower you with tools that support both emotional well-being and long-term resilience. Sessions are available in-person and online to ensure accessibility and comfort.</p>
                        </section>

                        <section className="info-section">
                            <h2>Categories</h2>
                            <div className="category-tags">
                                <span className="category-tag">Well-Being</span>
                                <span className="category-tag">Mental Health</span>
                                <span className="category-tag">Well-Being</span>
                            </div>
                        </section>

                        <section className="info-section">
                            <h2>Location</h2>
                            <div className="map-placeholder"></div>
                        </section>

                        <section className="contact-form-section">
                            <h2 className="form-title">Contact Business</h2>
                            <p className="form-subtitle">Please fill in the information to contact us.</p>
                            
                            <form className="details-form">
                                <div className="form-row">
                                    <div className="form-field">
                                        <label>First Name</label>
                                        <input type="text" defaultValue="Kevin" />
                                    </div>
                                    <div className="form-field">
                                        <label>Last Name</label>
                                        <input type="text" defaultValue="Backer" />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-field">
                                        <label>Email address</label>
                                        <input type="email" defaultValue="kevinbacke324@gmail.com" />
                                    </div>
                                    <div className="form-field">
                                        <label>Phone number</label>
                                        <input type="text" defaultValue="+1 (7) 567 6587 658" />
                                    </div>
                                </div>

                                <div className="form-field full-width">
                                    <label>Your Message</label>
                                    <textarea defaultValue="Lortem ipsum door ist emat"></textarea>
                                </div>

                                <button type="submit" className="form-submit-btn">Submit</button>
                            </form>
                        </section>
                    </div>

                    <div className="details-right-sidebar">
                        <div className="info-card">
                            <h3>Working Hours</h3>
                            <div className="working-hours">
                                <div className="hours-row"><span>Monday</span><strong>06:00 AM - 05:00 PM</strong></div>
                                <div className="hours-row"><span>Tuesday</span><strong>06:00 AM - 05:00 PM</strong></div>
                                <div className="hours-row"><span>Wednesday</span><strong>06:00 AM - 05:00 PM</strong></div>
                                <div className="hours-row"><span>Thursday</span><strong>06:00 AM - 05:00 PM</strong></div>
                                <div className="hours-row"><span>Friday</span><strong>06:00 AM - 05:00 PM</strong></div>
                                <div className="hours-row"><span>Saturday</span><strong>Closed</strong></div>
                                <div className="hours-row"><span>Sunday</span><strong>Closed</strong></div>
                            </div>

                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <div className="contact-row">
                                    <label>Email address</label>
                                    <span>info@nour.com</span>
                                </div>
                                <div className="contact-row">
                                    <label>Phone Number</label>
                                    <span>+1 (78) 656876 76</span>
                                </div>
                            </div>

                            <div className="sidebar-actions">
                                <button className="action-btn-outline">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A607" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    Call us Now
                                </button>
                                <button className="action-btn-outline">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A607" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    Mail Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Businesses Section */}
                <section className="related-businesses-section">
                    <div className="section-header-centered">
                        <span className="recommendation-badge">Recommendation</span>
                        <h2 className="related-title">More Related Businesses</h2>
                        <p className="related-subtitle">
                            Explore expert-backed articles covering early learning, reading habits, parenting tips, and creative activities for kids.
                        </p>
                    </div>

                    <div className="related-grid">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="related-card">
                                <div className="related-image-wrapper">
                                    <img src={detailImg} alt="Related Business" />
                                    <div className="related-location-badge">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#CF1B2B">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3" fill="white"></circle>
                                        </svg>
                                        Riyadh , Saudia Arabia
                                    </div>
                                </div>
                                <div className="related-info">
                                    <h3>Nour Wellness & Counseling</h3>
                                    <p>Compassionate, faith-aware mental health support for women.</p>
                                    <div className="related-tags">
                                        <span className="related-tag">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4A607">
                                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                            </svg>
                                            Shia-aligned
                                        </span>
                                        <span className="related-tag">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4A607">
                                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                            </svg>
                                            Featured
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <AddBusiness />
        </div>
    );
};

export default BusinessDetails;
