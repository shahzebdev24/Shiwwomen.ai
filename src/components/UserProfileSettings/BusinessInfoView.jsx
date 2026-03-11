import React from 'react';
import './BusinessInfoView.css';

const BusinessInfoView = () => {
    const infoItems = [
        { label: 'Business Name', value: 'Flash Devices Sellers' },
        { label: 'Category', value: 'Cleaning Business' },
        { label: 'Location', value: 'California, USA' },
        { label: 'Website', value: 'www.onlineflash.com' },
        { label: 'Instagram Link', value: 'https://instagram/profile here' },
        { label: 'Description', value: 'Lorem ipsum door istm emt' },
    ];

    return (
        <div className="ups-section biv-container">
            <div className="ups-section-header">
                <div>
                    <h2 className="ups-section-title">Business Information</h2>
                    <p className="ups-section-desc">Here you can view or edit your profile information.</p>
                </div>
                <div className="ups-action-btns">
                    <button className="ups-save-btn biv-edit-btn">Edit Information</button>
                </div>
            </div>

            <div className="biv-data-list">
                {infoItems.map((item, index) => (
                    <div key={index} className="biv-data-row">
                        <span className="biv-label">{item.label}</span>
                        <span className="biv-value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessInfoView;
