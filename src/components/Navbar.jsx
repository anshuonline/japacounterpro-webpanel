import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo-container">
          <img src="/images/logo.png" alt="JapaCounter Pro Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <div className="logo-icon" style={{ display: 'none' }}>🕉️</div>
          <span className="logo-text">JapaCounter Pro</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/why-naam-jaap" className={`nav-link ${location.pathname === '/why-naam-jaap' ? 'active' : ''}`}>Why Naam Jaap?</Link>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" className="nav-btn" target="_blank" rel="noopener noreferrer">Download</a>
      </div>
    </nav>
  );
}

export default Navbar;
