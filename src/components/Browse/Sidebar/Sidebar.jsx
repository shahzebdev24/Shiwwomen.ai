import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [minDist, setMinDist] = useState(1);
    const [maxDist, setMaxDist] = useState(4);

    const handleMinChange = (e) => {
        const val = Math.min(Number(e.target.value), maxDist - 0.1);
        setMinDist(val);
    };

    const handleMaxChange = (e) => {
        const val = Math.max(Number(e.target.value), minDist + 0.1);
        setMaxDist(val);
    };

    return (
        <aside className="filters-sidebar">
            <div className="sidebar-card">
                <div className="filters-header">
                    <h2>Select Filters</h2>
                    <p>Please select the filters as per your preferences.</p>
                </div>

                <div className="filter-items-container">
                    <div className="filter-item">
                        <label>Category</label>
                        <div className="filter-input-wrapper">
                            <span className="filter-value">Mental Health & Counseling</span>
                            <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>

                    <div className="filter-item">
                        <label>Country</label>
                        <div className="filter-input-wrapper">
                            <span className="filter-value">Riyadh , KSA</span>
                            <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="filter-item">
                        <label>Sort by</label>
                        <div className="filter-input-wrapper">
                            <span className="filter-value">Featured First</span>
                            <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="filter-item">
                        <label>Faith Alignment</label>
                        <div className="filter-input-wrapper">
                            <span className="filter-value">Shia - Aligned</span>
                            <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="filter-item no-bg">
                        <label className="distance-label">Distance</label>
                        <div className="slider-container">
                            <div className="slider-track-background"></div>
                            <div className="slider-track-active" 
                                style={{ 
                                    left: `${((minDist - 1) / 4) * 100}%`, 
                                    width: `${((maxDist - minDist) / 4) * 100}%` 
                                }}
                            ></div>
                            <input 
                                type="range" 
                                min="1" 
                                max="5" 
                                step="0.1"
                                value={minDist} 
                                onChange={handleMinChange}
                                className="range-slider thumb-min"
                            />
                            <input 
                                type="range" 
                                min="1" 
                                max="5" 
                                step="0.1"
                                value={maxDist} 
                                onChange={handleMaxChange}
                                className="range-slider thumb-max"
                            />
                            <div className="slider-labels">
                                <span style={{ marginLeft: `${((minDist - 1) / 4) * 100}%`, transform: 'translateX(-50%)' }}>1KM</span>
                                <span style={{ position: 'absolute', left: `${((maxDist - 1) / 4) * 100}%`, transform: 'translateX(-50%)' }}>5KM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filter-actions">
                    <button className="reset-btn">Reset</button>
                    <button className="apply-btn">Apply</button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
