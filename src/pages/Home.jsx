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

      {/* Bento Box Features Section */}
      <section className="features bg-light bento-section">
        <div className="container">
          <div className="section-header">
            <h2>Designed for Peace</h2>
            <p>Every pixel is crafted to give you a distraction-free chanting experience.</p>
          </div>
          <div className="bento-grid">
            <div className="bento-card card-large gradient-bg">
              <div className="bento-content">
                <div className="feature-icon">🎙️</div>
                <h3>Custom Chanting Audio</h3>
                <p>Record and trim your own voice for guided meditation. Experience your personal spiritual rhythm.</p>
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-content">
                <div className="feature-icon">📱</div>
                <h3>Home Screen Widget</h3>
                <p>Chant directly from your home screen without opening the app.</p>
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-content">
                <div className="feature-icon">🛡️</div>
                <h3>Secure Local Backup</h3>
                <p>Easily export and import your devotion data safely on your device.</p>
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-content">
                <div className="feature-icon">📅</div>
                <h3>Calendar & Streaks</h3>
                <p>Track your daily devotion with our visual streak calendar.</p>
              </div>
            </div>
            <div className="bento-card card-wide">
              <div className="bento-content flex-row">
                <div className="bento-text">
                  <div className="feature-icon">🏆</div>
                  <h3>Global Leaderboard & Challenges</h3>
                  <p>Push your spiritual limits, complete challenges, and see your worldwide ranking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Gallery Section */}
      <section className="app-gallery">
        <div className="container">
          <div className="section-header">
            <h2>Beautiful & Intuitive</h2>
            <p>A serene interface that keeps you focused on what matters.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/ss1.png" alt="App Screenshot 1" className="gallery-img" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="gallery-item">
              <img src="/images/ss2.png" alt="App Screenshot 2" className="gallery-img" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="gallery-item">
              <img src="/images/ss3.png" alt="App Screenshot 3" className="gallery-img" onError={(e) => e.target.style.display = 'none'} />
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
