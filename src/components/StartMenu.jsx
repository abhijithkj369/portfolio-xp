import React from 'react';
import '../styles/components.css';

const StartMenu = ({ visible, onItemClick }) => {
    if (!visible) return null;

    return (
        <div className="start-menu">
            <div className="start-header">
                <div className="user-avatar"></div>
                <span>Guest User</span>
            </div>

            <div className="start-body">
                <div className="start-col-left">
                    <div className="start-item" onClick={() => onItemClick && onItemClick('about')}>
                        <span>📝 About Me</span>
                    </div>
                    <div className="start-item" onClick={() => onItemClick && onItemClick('projects')}>
                        <span>📂 Projects</span>
                    </div>
                    <div className="start-item" onClick={() => onItemClick && onItemClick('contact')}>
                        <span>📧 Contact</span>
                    </div>
                    <div style={{ borderTop: '1px solid #ddd', margin: '5px 0' }}></div>
                    <div className="start-item">
                        <span>🎨 Notepad</span>
                    </div>
                </div>

                <div className="start-col-right">
                    <div className="start-item">
                        <strong>My Documents</strong>
                    </div>
                    <div className="start-item">
                        <strong>My Recent Documents</strong>
                    </div>
                    <div className="start-item">
                        <strong>My Pictures</strong>
                    </div>
                    <div className="start-item">
                        <strong>My Music</strong>
                    </div>
                    <div className="start-item">
                        <strong>My Computer</strong>
                    </div>
                    <div style={{ borderTop: '1px solid #95BDE7', margin: '5px 0' }}></div>
                    <div className="start-item">
                        <span>Control Panel</span>
                    </div>
                    <div className="start-item">
                        <span>Search</span>
                    </div>
                    <div className="start-item">
                        <span>Run...</span>
                    </div>
                </div>
            </div>

            <div className="start-footer">
                <div className="start-item" style={{ color: 'white' }}>
                    <span>Log Off</span>
                </div>
                <div className="start-item" style={{ color: 'white' }}>
                    <span>Turn Off Computer</span>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;
