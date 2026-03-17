import React, { useState } from 'react';
import './BusinessInfo.css';

const BusinessInfo = ({ onBack, onNext }) => {
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        setShowModal(true);
        // Removed direct navigation to next page as requested
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="business-info-page">
            <header className="business-info-header">
                <h1 className="business-info-title">Business Information</h1>
                <p className="business-info-subtitle">
                    Please fill out the information below to list down your business and so users can view your business.
                </p>
            </header>

            <div className="business-info-content">
                <div className="form-sections-wrapper">
                    {/* Left side: Form Inputs */}
                    <div className="form-inputs-column">
                        <div className="info-form-group">
                            <label>Business Name</label>
                            <input type="text" placeholder="Flash Devices Sellers" />
                        </div>

                        <div className="info-form-group">
                            <label>Category</label>
                            <div className="select-wrapper">
                                <select defaultValue="Business">
                                    <option value="Business">Business</option>
                                    <option value="Health">Health</option>
                                    <option value="Education">Education</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="info-form-row">
                            <div className="info-form-group">
                                <label>Email address</label>
                                <input type="email" placeholder="info@flash.com" />
                            </div>
                            <div className="info-form-group">
                                <label>Phone number</label>
                                <input type="tel" placeholder="+1 (45) 5756 78" />
                            </div>
                        </div>

                        <div className="info-form-group">
                            <label>Location</label>
                            <input type="text" placeholder="California, USA" />
                        </div>

                        <div className="info-form-group">
                            <label>Website</label>
                            <input type="url" placeholder="www.onlineflash.com" />
                        </div>

                        <div className="info-form-group textarea-group">
                            <label>Descriptions</label>
                            <textarea placeholder="Lorem ipsum dolor iset emt contest"></textarea>
                        </div>

                        {/* Social Links Section */}
                        <div className="social-links-section">
                            <h4 className="social-links-label">SOCIAL LINKS</h4>
                            <div className="social-link-item active">
                                <span>Instagram</span>
                                <span className="chevron up"></span>
                            </div>
                            <div className="social-link-item">
                                <span>Facebook</span>
                                <span className="chevron down"></span>
                            </div>
                            <div className="social-link-item">
                                <span>TikTok</span>
                                <span className="chevron down"></span>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Uploaders */}
                    <div className="uploaders-column">
                        <div className="upload-box-card">
                            <div className="upload-icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E4A607" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                            </div>
                            <h3>Upload Business Logo</h3>
                            <p>Max size 100mb</p>
                            <button className="upload-btn">Upload</button>
                        </div>

                        <div className="upload-box-card">
                            <div className="upload-icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E4A607" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                            </div>
                            <h3>Upload Gallery Images</h3>
                            <p>Can Upload multiple images</p>
                            <button className="upload-btn">Upload</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-icon-success">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h2 className="modal-title">Information Saved!</h2>
                        <p className="modal-text">
                            Your business information has been successfully saved. 
                            Our team will review your details and update your listing shortly.
                        </p>
                        <div className="modal-actions">
                            <button className="modal-btn-primary" onClick={handleCloseModal}>Got it!</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusinessInfo;
