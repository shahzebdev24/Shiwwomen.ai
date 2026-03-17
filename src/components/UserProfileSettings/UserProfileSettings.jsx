import React, { useState } from 'react';
import './UserProfileSettings.css';
import BusinessInfoView from './BusinessInfoView';
import SubscriptionManagement from './SubscriptionManagement';
import FavouritesView from './FavouritesView';

const UserProfileSettings = ({ onBack }) => {
    const [activeSection, setActiveSection] = useState('personal');

    const menuItems = [
        {
            id: 'personal',
            label: 'Personal Information',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60866 16.4167C6.29199 15.6833 7.33366 15.7417 7.93366 16.5417L8.77533 17.6667C9.45033 18.5583 10.542 18.5583 11.217 17.6667L12.0587 16.5417C12.6587 15.7417 13.7003 15.6833 14.3837 16.4167C15.867 18 17.0753 17.475 17.0753 15.2583V5.86666C17.0837 2.50832 16.3003 1.66666 13.1503 1.66666H6.85033C3.70033 1.66666 2.91699 2.50832 2.91699 5.86666V15.25C2.91699 17.475 4.13366 17.9917 5.60866 16.4167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.74705 9.16667H6.75454" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.08203 9.16666H13.6654" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.74705 5.83332H6.75454" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.08203 5.83334H13.6654" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            id: 'business',
            label: 'Business Information',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            ),
        },
        {
            id: 'subscriptions',
            label: 'My Subscriptions',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9163 15.8167H6.08301C5.73301 15.8167 5.34134 15.5417 5.22468 15.2083L1.77468 5.55834C1.28301 4.17501 1.85801 3.75001 3.04134 4.60001L6.29134 6.92501C6.83301 7.30001 7.44968 7.10834 7.68301 6.50001L9.14968 2.59167C9.61634 1.34167 10.3913 1.34167 10.858 2.59167L12.3247 6.50001C12.558 7.10834 13.1747 7.30001 13.708 6.92501L16.758 4.75001C18.058 3.81667 18.683 4.29168 18.1497 5.80001L14.783 15.225C14.658 15.5417 14.2663 15.8167 13.9163 15.8167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.41699 18.3333H14.5837" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.91699 11.6667H12.0837" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            id: 'favourites',
            label: 'Favourites',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            ),
        },
        {
            id: 'delete',
            label: 'Delete Account',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
                </svg>
            ),
        },
    ];

    return (
        <div className="ups-page">
            <header className="ups-header">
                <h1 className="ups-title">User Profile Settings</h1>
                <p className="ups-subtitle">
                    Please fill out the information below to list down your business and so users can view your business.
                </p>
            </header>

            <div className="ups-layout">
                {/* Sidebar */}
                <aside className="ups-sidebar">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`ups-menu-item ${activeSection === item.id ? 'active' : ''} ${item.id === 'delete' ? 'danger' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <span className="ups-menu-icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </aside>

                {/* Main Content */}
                <div className="ups-content">
                    {activeSection === 'personal' && (
                        <>
                            {/* Personal Information Section */}
                            <div className="ups-section">
                                <div className="ups-section-header">
                                    <div>
                                        <h2 className="ups-section-title">Personal Information</h2>
                                        <p className="ups-section-desc">Here you can view or edit your profile information.</p>
                                    </div>
                                    <div className="ups-action-btns">
                                        <button className="ups-reset-btn">Reset</button>
                                        <button className="ups-save-btn">Save Information</button>
                                    </div>
                                </div>

                                <div className="ups-form-card">
                                    <div className="ups-form-row">
                                        <div className="ups-form-group">
                                            <label>First Name</label>
                                            <input type="text" defaultValue="Kevin" />
                                        </div>
                                        <div className="ups-form-group">
                                            <label>Last Name</label>
                                            <input type="text" defaultValue="Backer" />
                                        </div>
                                    </div>
                                    <div className="ups-form-row">
                                        <div className="ups-form-group">
                                            <label>Email address</label>
                                            <input type="email" defaultValue="christop234@gmail.com" />
                                        </div>
                                        <div className="ups-form-group">
                                            <label>Phone number</label>
                                            <input type="tel" defaultValue="+1 (78) 6876876 78" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Change Password Section */}
                            <div className="ups-section">
                                <div className="ups-section-header">
                                    <div>
                                        <h2 className="ups-section-title">Change Password</h2>
                                        <p className="ups-section-desc">Here you can change your password.</p>
                                    </div>
                                    <div className="ups-action-btns">
                                        <button className="ups-reset-btn">Reset</button>
                                        <button className="ups-save-btn">Save Information</button>
                                    </div>
                                </div>

                                <div className="ups-form-card">
                                    <div className="ups-form-row">
                                        <div className="ups-form-group full-width">
                                            <label>Current Password</label>
                                            <input type="text" defaultValue="Test.19970" />
                                        </div>
                                    </div>
                                    <div className="ups-form-row">
                                        <div className="ups-form-group full-width">
                                            <label>Create new Password</label>
                                            <input type="text" defaultValue="Test.19970" />
                                        </div>
                                    </div>
                                    <div className="ups-form-row">
                                        <div className="ups-form-group full-width">
                                            <label>Confirm new Password</label>
                                            <input type="text" defaultValue="Test.19970" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeSection === 'business' && <BusinessInfoView />}

                    {activeSection === 'subscriptions' && <SubscriptionManagement />}

                    {activeSection === 'favourites' && <FavouritesView />}
                </div>
            </div>
        </div>
    );
};

export default UserProfileSettings;
