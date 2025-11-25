import React from 'react';
import '../styles/components.css';

const WindowFrame = ({ title, children, onClose, style }) => {
    return (
        <div className="window-frame" style={style}>
            <div className="window-title-bar">
                <span>{title}</span>
                <div className="window-controls">
                    <button className="control-btn" style={{ background: '#1E90FF' }}>_</button>
                    <button className="control-btn" style={{ background: '#1E90FF' }}>□</button>
                    <button className="control-btn" onClick={onClose}>×</button>
                </div>
            </div>
            <div className="window-content">
                {children}
            </div>
        </div>
    );
};

export default WindowFrame;
