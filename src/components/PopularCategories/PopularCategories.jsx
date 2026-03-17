import React from 'react';
import './PopularCategories.css';

const categories = [
    { name: 'Food', id: 1 },
    { name: 'Trades', id: 2 },
    { name: 'Services', id: 3 },
    { name: 'Clothing', id: 4 },
    { name: 'Beauty', id: 5 },
    { name: 'Education', id: 6 },
    { name: 'Health', id: 7 },
    { name: 'Fitness', id: 8 },
    { name: 'Events', id: 9 },
    { name: 'Travel', id: 10 },
];

const PopularCategories = () => {
    return (
        <div className="categories-section">
            <div className="categories-header">
                <h2 className="categories-title">Popular Categories</h2>
                <div className="categories-line"></div>
                <button className="categories-arrow">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            
            <div className="categories-grid">
                {categories.map((cat) => (
                    <div key={cat.id} className="category-card">
                        <div className="category-icon-bg">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#E4A607" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 3V9C9 10.1 8.1 11 7 11V21H5V11C3.9 11 3 10.1 3 9V3H4V8H5V3H6V8H7V3H9Z" />
                                <path d="M17 3C17 3 21 3.5 21 9V21H19V13H17.5C17.2 13 17 12.8 17 12.5V3Z" />
                            </svg>
                        </div>
                        <span className="category-name">{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategories;
