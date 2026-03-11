import React from 'react';
import './SubscriptionManagement.css';

const SubscriptionManagement = () => {
    const crownIcon = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9163 15.8167H6.08301C5.73301 15.8167 5.34134 15.5417 5.22468 15.2083L1.77468 5.55834C1.28301 4.17501 1.85801 3.75001 3.04134 4.60001L6.29134 6.92501C6.83301 7.30001 7.44968 7.10834 7.68301 6.50001L9.14968 2.59167C9.61634 1.34167 10.3913 1.34167 10.858 2.59167L12.3247 6.50001C12.558 7.10834 13.1747 7.30001 13.708 6.92501L16.758 4.75001C18.058 3.81667 18.683 4.29168 18.1497 5.80001L14.783 15.225C14.658 15.5417 14.2663 15.8167 13.9163 15.8167Z" stroke="#E4A607" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.41699 18.3333H14.5837" stroke="#E4A607" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.91699 11.6667H12.0837" stroke="#E4A607" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <div className="ups-section sm-container">
            <div className="ups-section-header sm-header">
                <div>
                    <h2 className="ups-section-title">Subscription Management</h2>
                    <p className="ups-section-desc">Here you can manage your active subscription plan</p>
                </div>
                <div className="ups-action-btns">
                    <button className="ups-reset-btn sm-cancel-btn">Cancel Subscription</button>
                    <button className="ups-save-btn sm-renew-btn">Renew Plan</button>
                </div>
            </div>

            <div className="sm-active-plan-card">
                <div className="sm-plan-info">
                    <div className="sm-plan-icon-wrapper">
                        {crownIcon}
                    </div>
                    <div className="sm-plan-details">
                        <div className="sm-plan-name-row">
                            <h3>Basic Plan</h3>
                            <span className="sm-status-badge">Active</span>
                        </div>
                        <p className="sm-subscribed-on">Subscribed: May 23, 2025</p>
                    </div>
                </div>
                
                <div className="sm-progress-section">
                    <div className="sm-progress-bar">
                        <div className="sm-progress-fill" style={{ width: '40%' }}></div>
                    </div>
                    <p className="sm-next-payment">Next Payment : Dec 23, 2026</p>
                </div>
            </div>

            <div className="sm-payment-methods">
                <h4 className="sm-payments-label">PAYMENT METHODS</h4>
                
                <div className="sm-card-item">
                    <div className="sm-card-info">
                        <h3>Mastercard ***56</h3>
                        <p>Expiry date: 05/29</p>
                    </div>
                    <div className="sm-card-actions">
                        <button className="sm-action-btn delete">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>
                        </button>
                        <button className="sm-action-btn edit">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E4A607" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                    </div>
                </div>

                <button className="sm-add-payment-btn">
                    + Add new payment method
                </button>
            </div>
        </div>
    );
};

export default SubscriptionManagement;
