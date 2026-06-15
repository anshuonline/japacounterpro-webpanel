import { useEffect } from 'react';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
          <div className="h-1.5 w-16 bg-gradient-to-r from-saffron to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="glass rounded-[2rem] p-8 md:p-12 shadow-lg">
          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-6">Welcome to JapaCounter Pro. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our application.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li><strong className="text-gray-900">Identity Data:</strong> includes username or similar identifier.</li>
              <li><strong className="text-gray-900">Usage Data:</strong> includes information about how you use our website, products and services.</li>
              <li><strong className="text-gray-900">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>To manage your account and global leaderboard ranking.</li>
              <li>To improve our app and provide a better spiritual experience.</li>
              <li>To securely backup your progress to the cloud/local storage.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-6">If you have any questions about this privacy policy or our privacy practices, please contact us via the support section in the app.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Privacy;
