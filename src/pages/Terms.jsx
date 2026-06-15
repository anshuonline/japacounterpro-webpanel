import { useEffect } from 'react';

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in content-page">
      <div className="container">
        <div className="page-header text-center">
          <h1>Terms & Conditions</h1>
          <div className="highlight-line mx-auto"></div>
        </div>

        <div className="content-body">
          <section className="text-section">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2>1. Agreement to Terms</h2>
            <p>By downloading or using the JapaCounter Pro app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.</p>

            <h2>2. Use of the Application</h2>
            <ul>
              <li>You may not copy, or modify the app, any part of the app, or our trademarks in any way.</li>
              <li>You may not attempt to extract the source code of the app.</li>
              <li>You may not try to translate the app into other languages, or make derivative versions.</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>To participate in the Global Leaderboard, you may be required to choose a username. You agree not to use offensive or inappropriate usernames. We reserve the right to ban accounts that violate these guidelines.</p>

            <h2>4. Changes to This Terms and Conditions</h2>
            <p>We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;
