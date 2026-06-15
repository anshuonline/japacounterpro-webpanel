import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="Logo" className="logo-img-small" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <div className="logo-icon" style={{ display: 'none' }}>🕉️</div>
            <span className="logo-text">JapaCounter Pro</span>
          </Link>
          <p>Your spiritual journey, modernized.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/why-naam-jaap">Why Naam Jaap?</Link>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
        
        <div className="footer-cta">
          <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" className="btn-primary footer-btn" target="_blank" rel="noopener noreferrer">
            Get the App
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hypecrews. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
