import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/image.png';

const Login = ({ setCurrentPage, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormFilled = email.trim() !== '' && password.trim() !== '';

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <img src={logo} alt="Logo" className="login-logo" />

                <h2 className="login-title">Login to Dashboard</h2>
                <p className="login-subtitle">Please enter the credentials to get started.</p>

                <form className="login-form">
                    <div className="input-group">
                        <div className="input-content">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="login-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className="input-floating-label">Email address</label>
                        </div>
                        <span className="input-icon">
                            {email ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E4A607" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            )}
                        </span>
                    </div>

                    <div className="input-group">
                        <div className="input-content">
                            <input
                                type="password"
                                id="password"
                                placeholder=" "
                                className="login-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className="input-floating-label">Password</label>
                        </div>
                        <span className="input-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </span>
                    </div>

                    <div className="login-extras">
                        <a href="#!" className="forgot-password">Forgot Password?</a>
                    </div>

                    <div className="remember-me-container">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button
                        type="button"
                        className={`continue-btn ${isFormFilled ? 'active' : ''}`}
                        disabled={!isFormFilled}
                        onClick={onLogin}
                    >
                        Continue
                    </button>
                </form>

                <div className="separator">
                    <span className="separator-line"></span>
                    <span className="separator-text">or sign in</span>
                    <span className="separator-line"></span>
                </div>

                <div className="social-login">
                    <button className="social-btn google-btn">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                        Google
                    </button>
                    <button className="social-btn apple-btn">
                        <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                        </svg>
                        Apple
                    </button>
                </div>

                <p className="signup-text">
                    Don't have an account? <a href="#!" className="signup-link">Create account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
