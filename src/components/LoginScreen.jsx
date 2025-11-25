import React from 'react';

const LoginScreen = ({ onLogin }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(to bottom, #5A9FD4 0%, #306CA8 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9998
        }}>
            {/* Welcome Text */}
            <div style={{
                fontSize: '28px',
                color: 'white',
                fontFamily: 'Tahoma, Verdana, sans-serif',
                fontWeight: 'normal',
                marginBottom: '50px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
                To begin, click your user name
            </div>

            {/* User Profile Card */}
            <div
                onClick={onLogin}
                style={{
                    background: 'linear-gradient(to bottom, #FFF 0%, #E8F4FF 100%)',
                    border: '3px solid #003C74',
                    borderRadius: '8px',
                    padding: '25px 40px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.2s ease',
                    minWidth: '250px'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #FFF 0%, #D0E8FF 100%)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #FFF 0%, #E8F4FF 100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                {/* Profile Picture */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '36px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Tahoma, Verdana, sans-serif',
                    border: '3px solid white',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}>
                    AK
                </div>

                {/* User Name */}
                <div style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#003C74',
                    fontFamily: 'Tahoma, Verdana, sans-serif'
                }}>
                    Abhijith K J
                </div>

                {/* Click to Login Text */}
                <div style={{
                    fontSize: '12px',
                    color: '#666',
                    fontFamily: 'Tahoma, Verdana, sans-serif',
                    fontStyle: 'italic'
                }}>
                    Click to log on
                </div>
            </div>

            {/* Footer */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{
                    fontSize: '11px',
                    color: 'white',
                    fontFamily: 'Tahoma, Verdana, sans-serif'
                }}>
                    After you log on, you can add or change accounts.
                </div>
                <div style={{
                    fontSize: '11px',
                    color: 'white',
                    fontFamily: 'Tahoma, Verdana, sans-serif'
                }}>
                    Just go to Control Panel and click User Accounts.
                </div>
            </div>

            {/* Turn Off Computer Button */}
            <div style={{
                position: 'absolute',
                bottom: '80px',
                left: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                background: 'linear-gradient(to bottom, #FF6B6B 0%, #C92A2A 100%)',
                border: '2px solid white',
                borderRadius: '5px',
                color: 'white',
                fontSize: '12px',
                fontFamily: 'Tahoma, Verdana, sans-serif',
                cursor: 'pointer',
                boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
                <span style={{ fontSize: '16px' }}>⏻</span>
                <span>Turn off computer</span>
            </div>
        </div>
    );
};

export default LoginScreen;
