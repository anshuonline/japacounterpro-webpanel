import { useEffect } from 'react';

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Terms & Conditions</h1>
          <div className="h-1.5 w-16 bg-gradient-to-r from-saffron to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="glass rounded-[2rem] p-8 md:p-12 shadow-lg">
          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6">By downloading or using the JapaCounter Pro app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use of the Application</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>You may not copy, or modify the app, any part of the app, or our trademarks in any way.</li>
              <li>You may not attempt to extract the source code of the app.</li>
              <li>You may not try to translate the app into other languages, or make derivative versions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
            <p className="mb-6">To participate in the Global Leaderboard, you may be required to choose a username. You agree not to use offensive or inappropriate usernames. We reserve the right to ban accounts that violate these guidelines.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Changes to This Terms and Conditions</h2>
            <p className="mb-6">We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-6">If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Terms;
