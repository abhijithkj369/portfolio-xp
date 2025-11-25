import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo - implement your actual contact logic)');
    };

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}>
            {/* Toolbar */}
            <div style={{
                background: '#F0F0F0',
                borderBottom: '1px solid #ccc',
                padding: '5px 10px',
                display: 'flex',
                gap: '10px'
            }}>
                <button style={{
                    padding: '4px 12px',
                    fontSize: '11px',
                    background: '#E0E0E0',
                    border: '1px outset #ccc',
                    cursor: 'pointer'
                }} onClick={handleSubmit}>
                    📧 Send
                </button>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex' }}>
                {/* Form Area */}
                <div style={{ flex: 1, padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ width: '60px', fontSize: '11px', fontWeight: 'bold' }}>From:</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@example.com"
                            style={{
                                flex: 1,
                                padding: '3px 5px',
                                border: '1px inset #ccc',
                                fontSize: '11px',
                                fontFamily: 'Tahoma, Verdana, sans-serif'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ width: '60px', fontSize: '11px', fontWeight: 'bold' }}>To:</label>
                        <input
                            type="text"
                            value="contact@myportfolio.dev"
                            readOnly
                            style={{
                                flex: 1,
                                padding: '3px 5px',
                                border: '1px inset #ccc',
                                fontSize: '11px',
                                background: '#f9f9f9',
                                fontFamily: 'Tahoma, Verdana, sans-serif'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ width: '60px', fontSize: '11px', fontWeight: 'bold' }}>Subject:</label>
                        <input
                            type="text"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Enter subject"
                            style={{
                                flex: 1,
                                padding: '3px 5px',
                                border: '1px inset #ccc',
                                fontSize: '11px',
                                fontFamily: 'Tahoma, Verdana, sans-serif'
                            }}
                        />
                    </div>

                    <div style={{ borderTop: '1px solid #ccc', marginTop: '5px' }}></div>

                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message here..."
                        style={{
                            flex: 1,
                            padding: '5px',
                            border: '1px inset #ccc',
                            fontSize: '11px',
                            fontFamily: 'Tahoma, Verdana, sans-serif',
                            resize: 'none'
                        }}
                    />
                </div>

                {/* Contacts Sidebar */}
                <div style={{
                    width: '180px',
                    background: '#F0F0F0',
                    borderLeft: '1px solid #ccc',
                    padding: '10px'
                }}>
                    <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '10px' }}>
                        📇 Connect With Me
                    </div>
                    <div style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
                            color: '#00138C',
                            textDecoration: 'none',
                            padding: '3px 5px'
                        }}>
                            💻 GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                            color: '#00138C',
                            textDecoration: 'none',
                            padding: '3px 5px'
                        }}>
                            💼 LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
                            color: '#00138C',
                            textDecoration: 'none',
                            padding: '3px 5px'
                        }}>
                            🐦 Twitter
                        </a>
                        <a href="mailto:contact@myportfolio.dev" style={{
                            color: '#00138C',
                            textDecoration: 'none',
                            padding: '3px 5px'
                        }}>
                            📧 Email
                        </a>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div style={{
                background: '#F0F0F0',
                borderTop: '1px solid #ccc',
                padding: '2px 10px',
                fontSize: '10px'
            }}>
                Ready to send
            </div>
        </div>
    );
};

export default Contact;
