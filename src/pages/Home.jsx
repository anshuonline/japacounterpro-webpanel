import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-fade-in">
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
            <div className="app-mockup-wrapper">
              <img 
                src="/images/ss1.png" 
                alt="App Screenshot" 
                className="mockup-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="app-mockup fallback-mockup" style={{ display: 'none' }}>
                <div className="mockup-content">
                  <h2>Shri Radhe</h2>
                  <div className="counter-circle">
                    <span>2833</span>
                  </div>
                  <div className="mockup-bottom-stats">
                    <p>Goal: 14000</p>
                    <p>Malas: 26</p>
                  </div>
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
              <div className="feature-icon">💎</div>
              <h3>Level Up Your Devotion</h3>
              <p>Progress through spiritual levels as you complete more malas.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress & Stats</h3>
              <p>Detailed daily, weekly, and all-time statistics for your spiritual journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Call to Action for Why Naam Jaap */}
      <section className="mini-cta">
        <div className="container text-center">
          <h2>Discover the Power of Chanting</h2>
          <p>Why should we chant the Holy Name in Kaliyuga? Explore the profound scientific and spiritual benefits.</p>
          <Link to="/why-naam-jaap" className="btn-secondary mt-4">Read: Why Naam Jaap?</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
