import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-content">
          <div className="logo-container">
            <div className="logo-icon">🕉️</div>
            <span className="logo-text">JapaCounter Pro</span>
          </div>
          <a href="#download" className="nav-btn">Download Free</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <div className="badge">New: Global Leaderboard 🎉</div>
            <h1>Your Spiritual Journey,<br/>Digitized & Beautiful.</h1>
            <p>Experience the most premium, ad-free, and serene mantra chanting experience. Join the global leaderboard and chant your way to peace.</p>
            <div className="hero-cta">
              <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" className="btn-primary" target="_blank" rel="noopener noreferrer">
                Download on Google Play
              </a>
              <span className="download-info">Free · Android Only</span>
            </div>
          </div>
          <div className="hero-image-container">
            {/* We will add an image generation for this later, for now a placeholder */}
            <div className="app-mockup">
              <div className="mockup-content">
                <h2>Om Namah Shivaya</h2>
                <div className="counter-circle">
                  <span>108</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Designed for Peace</h2>
            <p>Every pixel is crafted to give you a distraction-free chanting experience.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Global Leaderboard</h3>
              <p>See your worldwide ranking and get inspired by devotees across the globe.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Guided Meditation</h3>
              <p>Listen to soothing mantras with built-in background chanting and focus sounds.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Cloud Backup</h3>
              <p>Never lose your progress. Safely backup your spiritual journey to the cloud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Naam Jaap Section */}
      <section className="why-naam-jaap" id="why-naam-jaap">
        <div className="container">
          <div className="naam-jaap-content">
            <div className="naam-jaap-text">
              <h2>Why Naam Jaap?</h2>
              <div className="highlight-line"></div>
              <p className="lead">In the age of Kaliyuga, chanting is the simplest path to supreme peace.</p>
              
              <div className="detail-blocks">
                <div className="detail-block">
                  <h3>Universal Truth</h3>
                  <p>Regardless of your religion, caste, creed, or background, the name of the Divine holds immense power. It transcends all human-made boundaries. God is one, and calling out to the ultimate reality connects your soul directly to the source.</p>
                </div>
                
                <div className="detail-block">
                  <h3>The Kaliyuga Effect</h3>
                  <p>Ancient scriptures mention that in Kaliyuga—the age of distraction and conflict—complex rituals and strict meditations are extremely difficult. The easiest and most effective way to purify the mind and attain liberation is simply repeating the Holy Name (Naam Jaap).</p>
                </div>
                
                <div className="detail-block">
                  <h3>Scientific & Mental Benefits</h3>
                  <p>Rhythmic chanting slows down your breathing, reduces anxiety, and activates the parasympathetic nervous system. It replaces negative thought patterns with a singular, positive focus, acting as a shield against daily stress.</p>
                </div>
              </div>
            </div>
            <div className="naam-jaap-graphics">
              <div className="graphic-circle outer"></div>
              <div className="graphic-circle inner"></div>
              <div className="graphic-icon">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="download">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-icon">🕉️</div>
              <span className="logo-text">JapaCounter Pro</span>
            </div>
            <p>Elevating your spiritual journey.</p>
          </div>
          <div className="footer-links">
            <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" className="btn-primary footer-btn" target="_blank" rel="noopener noreferrer">
              Get the App Now
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hypecrews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
