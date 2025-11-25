import React, { useState, useEffect } from 'react';

const Startup = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        // Start fade out after loading completes
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 4500);

        // Complete and notify parent
        const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 5000);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`startup-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="startup-content">
                {/* Windows XP Logo */}
                <div className="xp-logo">
                    <div className="xp-logo-text">
                        Microsoft<sup>®</sup>
                    </div>
                    <div className="windows-logo">
                        <span className="windows-text">Windows</span>
                        <span className="xp-text">XP</span>
                    </div>
                    <div className="xp-edition">Professional</div>
                </div>

                {/* Loading Animation - Classic XP Style */}
                <div className="loading-container">
                    <div className="loading-bar-bg">
                        <div className="loading-bar-track">
                            {/* Three animated blue blocks */}
                            <div className="loading-block" style={{ animationDelay: '0s' }}></div>
                            <div className="loading-block" style={{ animationDelay: '0.15s' }}></div>
                            <div className="loading-block" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .startup-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    opacity: 1;
                    transition: opacity 0.5s ease-out;
                }

                .startup-screen.fade-out {
                    opacity: 0;
                }

                .startup-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 80px;
                }

                /* XP Logo Styling */
                .xp-logo {
                    text-align: center;
                    animation: logoFadeIn 0.8s ease-out;
                }

                .xp-logo-text {
                    color: #FFFFFF;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 13px;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    font-weight: normal;
                }

                .xp-logo-text sup {
                    font-size: 8px;
                }

                .windows-logo {
                    display: flex;
                    align-items: baseline;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 4px;
                }

                .windows-text {
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 48px;
                    font-weight: normal;
                    background: linear-gradient(to bottom, #FFFFFF 0%, #B8D9FF 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: -2px;
                }

                .xp-text {
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 38px;
                    font-weight: bold;
                    background: linear-gradient(to bottom, #FFE14D 0%, #FF8C00 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: 1px;
                }

                .xp-edition {
                    color: #FFFFFF;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 14px;
                    letter-spacing: 2px;
                    margin-top: 2px;
                }

                /* Loading Bar - Classic XP Animation */
                .loading-container {
                    width: 280px;
                    animation: loadingFadeIn 0.5s ease-out 0.3s both;
                }

                .loading-bar-bg {
                    width: 100%;
                    height: 8px;
                    background: #000000;
                    border: 1px solid #1a1a1a;
                    border-radius: 0;
                    overflow: hidden;
                    position: relative;
                }

                .loading-bar-track {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    gap: 2px;
                    align-items: center;
                }

                /* The three animated blue blocks */
                .loading-block {
                    position: absolute;
                    width: 30px;
                    height: 6px;
                    background: linear-gradient(to right, 
                        #0846A8 0%, 
                        #2F7FD7 50%, 
                        #0846A8 100%
                    );
                    border-radius: 1px;
                    animation: slideBlock 1.5s ease-in-out infinite;
                    box-shadow: 0 0 4px rgba(47, 127, 215, 0.6);
                }

                @keyframes slideBlock {
                    0% {
                        left: -30px;
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        left: 280px;
                        opacity: 0;
                    }
                }

                @keyframes logoFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes loadingFadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Startup;
