import React from 'react';
import './SelectPlan.css';

const SelectPlan = ({ onSubscribe }) => {
    const plans = [
        {
            name: "Basic Plan",
            price: "0",
            desc: "Discover our affordable basic plan.",
            features: [
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
            ],
            isPopular: false
        },
        {
            name: "Standard Plan",
            price: "19.99",
            desc: "Discover our affordable basic plan.",
            features: [
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
            ],
            isPopular: true
        },
        {
            name: "Premium Plan",
            price: "49.99",
            desc: "Discover our affordable basic plan.",
            features: [
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
            ],
            isPopular: false
        }
    ];

    return (
        <div className="select-plan-page">
            <header className="select-plan-header">
                <h1 className="select-plan-title">Select Plan</h1>
                <p className="select-plan-subtitle">Please select the best plan to list down your business.</p>
            </header>

            <div className="plans-container">
                {plans.map((plan, index) => (
                    <div key={index} className={`plan-card ${plan.isPopular ? 'popular-card' : ''}`}>
                        {plan.isPopular && (
                            <div className="popular-badge">
                                <span>★</span> Most Popular
                            </div>
                        )}
                        <div className="plan-card-inner">
                            <h2 className="plan-name">{plan.name}</h2>
                            <p className="plan-desc">{plan.desc}</p>
                            
                            <div className="plan-price">
                                <span className="currency">$</span>
                                <span className="amount">{plan.price}</span>
                                <span className="period">/month</span>
                            </div>

                            <button 
    className={`subscribe-btn ${plan.isPopular ? 'popular-btn' : 'outline-btn'}`}
    onClick={onSubscribe}
>
    Subscribe
</button>

                            <div className="plan-features">
                                <p className="features-title">Which includes</p>
                                <ul className="features-list">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="check-icon">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectPlan;
