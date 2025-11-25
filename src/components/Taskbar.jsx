import React, { useState, useEffect } from 'react';
import '../styles/components.css';

const Taskbar = ({ onStartClick }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="taskbar">
            <button className="start-button" onClick={onStartClick}>
                <div className="start-icon">W</div>
                start
            </button>

            {/* Taskbar Items (Open Windows) would go here */}
            <div style={{ flex: 1 }}></div>

            <div className="system-tray">
                <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        </div>
    );
};

export default Taskbar;
