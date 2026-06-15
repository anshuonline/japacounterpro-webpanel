import { useEffect } from 'react';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in content-page">
      <div className="container">
        <div className="page-header text-center">
          <h1>Privacy Policy</h1>
          <div className="highlight-line mx-auto"></div>
        </div>

        <div className="content-body">
          <section className="text-section">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>Welcome to JapaCounter Pro. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our application.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data:</strong> includes username or similar identifier.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To manage your account and global leaderboard ranking.</li>
              <li>To improve our app and provide a better spiritual experience.</li>
              <li>To securely backup your progress to the cloud.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us via the support section in the app.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
