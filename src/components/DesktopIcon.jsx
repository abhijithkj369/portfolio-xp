import React from 'react';
import '../styles/components.css';

const DesktopIcon = ({ icon, label, onClick }) => {
    return (
        <div className="desktop-icon" onClick={onClick}>
            <div className="icon-img">{icon || '📁'}</div>
            <span>{label}</span>
        </div>
    );
};

export default DesktopIcon;
