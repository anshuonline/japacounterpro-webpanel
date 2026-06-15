import { useEffect } from 'react';

function WhyNaamJaap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in content-page">
      <div className="container">
        <div className="page-header text-center">
          <h1>Why Naam Jaap?</h1>
          <div className="highlight-line mx-auto"></div>
          <p className="lead-text">In the age of Kaliyuga, chanting is the simplest path to supreme peace.</p>
        </div>

        <div className="content-body">
          <div className="image-banner">
            <img src="/images/banner-naam-jaap.png" alt="Naam Jaap Meaning" className="rounded-image shadow-md" onError={(e) => e.target.style.display = 'none'} />
          </div>

          <section className="text-section">
            <h2>The Universal Truth</h2>
            <p>
              Regardless of your religion, caste, creed, or background, the name of the Divine holds immense power. It transcends all human-made boundaries. God is one, and calling out to the ultimate reality connects your soul directly to the source of all existence.
            </p>

            <h2>The Kaliyuga Effect</h2>
            <p>
              Ancient scriptures and spiritual masters agree that in Kaliyuga—the current age characterized by distraction, stress, and conflict—complex rituals, strict asceticism, and deep meditation are extremely difficult for the average human to maintain. 
              The easiest, most accessible, and most effective way to purify the mind and attain spiritual elevation is simply repeating the Holy Name (Naam Jaap).
            </p>

            <h2>Scientific & Mental Benefits</h2>
            <ul>
              <li><strong>Reduces Anxiety:</strong> Rhythmic chanting slows down your breathing and heart rate, activating the parasympathetic nervous system.</li>
              <li><strong>Improves Focus:</strong> It trains the monkey mind to concentrate on a single point, replacing chaotic negative thought patterns with a singular, positive vibration.</li>
              <li><strong>Emotional Stability:</strong> Regular chanting acts as an emotional shield against daily stress and cultivates a deep sense of inner joy.</li>
            </ul>

            <div className="quote-box">
              <p className="quote">"The Holy Name is the only shelter in this age of Kali. By chanting it, one is freed from all anxieties."</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WhyNaamJaap;
