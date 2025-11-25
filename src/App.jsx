import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import DesktopIcon from './components/DesktopIcon';
import WindowFrame from './components/WindowFrame';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Startup from './components/Startup';
import LoginScreen from './components/LoginScreen';
// Bliss wallpaper is in the public folder
const blissWallpaper = '/bliss.png';

function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  const openWindow = (windowData) => {
    setOpenWindows([...openWindows, { ...windowData, id: Date.now() }]);
    setStartMenuOpen(false);
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
  };

  const handleStartMenuClick = (item) => {
    if (item === 'about') {
      openWindow({ title: 'About Me - Notepad', content: <AboutMe /> });
    } else if (item === 'projects') {
      openWindow({ title: 'My Projects', content: <Projects /> });
    } else if (item === 'contact') {
      openWindow({ title: 'Contact - Outlook Express', content: <Contact /> });
    }
  };

  const handleStartupComplete = () => {
    setShowStartup(false);
    setShowLogin(true);
  };

  const handleLoginComplete = () => {
    setShowLogin(false);
  };

  // Show startup animation first
  if (showStartup) {
    return <Startup onComplete={handleStartupComplete} />;
  }

  // Show login screen after startup
  if (showLogin) {
    return <LoginScreen onLogin={handleLoginComplete} />;
  }

  return (
    <div className="desktop" style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${blissWallpaper})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Desktop Icons */}
      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column' }}>
        <DesktopIcon
          icon="📝"
          label="About Me"
          onClick={() => openWindow({ title: 'About Me - Notepad', content: <AboutMe /> })}
        />
        <DesktopIcon
          icon="📂"
          label="Projects"
          onClick={() => openWindow({ title: 'My Projects', content: <Projects /> })}
        />
        <DesktopIcon
          icon="📧"
          label="Contact"
          onClick={() => openWindow({ title: 'Contact - Outlook Express', content: <Contact /> })}
        />
        <div style={{ height: '20px' }}></div>
        <DesktopIcon
          icon="💻"
          label="My Computer"
          onClick={() => openWindow({ title: 'My Computer', content: <div style={{ padding: '10px' }}>This is My Computer window</div> })}
        />
        <DesktopIcon
          icon="🗑️"
          label="Recycle Bin"
          onClick={() => openWindow({ title: 'Recycle Bin', content: <div style={{ padding: '10px' }}>Recycle Bin is empty</div> })}
        />
      </div>

      {/* Open Windows */}
      {openWindows.map((win, idx) => (
        <WindowFrame
          key={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
          style={{
            top: 100 + idx * 30,
            left: 150 + idx * 30,
            width: '600px',
            height: '450px'
          }}
        >
          {win.content}
        </WindowFrame>
      ))}

      {/* Start Menu */}
      <StartMenu visible={startMenuOpen} onItemClick={handleStartMenuClick} />

      {/* Taskbar */}
      <Taskbar onStartClick={toggleStartMenu} />
    </div>
  );
}

export default App;
