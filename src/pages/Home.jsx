import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('https://jcproadminpanel.hypecrews.com/api/japacounterpro/get_feedbacks.php')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setFeedbacks(data.data);
        }
      })
      .catch(err => console.error("Error fetching feedbacks:", err));
  }, []);
  return (
    <div className="min-h-screen pt-24 pb-20">
      
      {/* Sarkari Style Marquee with Apple Glass UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="glass rounded-2xl overflow-hidden flex items-center p-2">
          <div className="bg-saffron text-white px-4 py-1 rounded-xl text-sm font-bold whitespace-nowrap z-10 shrink-0 shadow-sm">
            LATEST UPDATES
          </div>
          <div className="flex-1 overflow-hidden relative ml-4">
            <div className="whitespace-nowrap animate-marquee inline-block text-gray-700 font-medium text-sm">
              <span className="mx-4">🌟 New Global Leaderboard is now LIVE!</span>
              <span className="mx-4 text-saffron">•</span>
              <span className="mx-4">🏆 Complete daily challenges to level up faster.</span>
              <span className="mx-4 text-saffron">•</span>
              <span className="mx-4">📱 Add the new iOS-style widget to your home screen today!</span>
              {/* Duplicate for infinite effect */}
              <span className="mx-4">🌟 New Global Leaderboard is now LIVE!</span>
              <span className="mx-4 text-saffron">•</span>
              <span className="mx-4">🏆 Complete daily challenges to level up faster.</span>
              <span className="mx-4 text-saffron">•</span>
              <span className="mx-4">📱 Add the new iOS-style widget to your home screen today!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
            Your Spiritual Journey,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">Digitized & Beautiful.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Experience the most premium, ad-free, and serene mantra chanting experience. Join the global leaderboard and chant your way to peace.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-saffron to-orange-500 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Download on Google Play
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4 font-medium uppercase tracking-wider">Free · Android Only</p>
        </div>

        {/* 3-Column Sarkari-Apple Hybrid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Quick Links & Stats (Sarkari Vibe) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="glass p-6 rounded-3xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Quick Access</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/why-naam-jaap" className="flex items-center text-gray-600 hover:text-saffron transition-colors font-medium">
                    <span className="bg-orange-100 text-saffron p-1.5 rounded-lg mr-3 text-sm">📖</span>
                    Why Naam Jaap?
                  </Link>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-600 hover:text-saffron transition-colors font-medium">
                    <span className="bg-blue-100 text-blue-500 p-1.5 rounded-lg mr-3 text-sm">🏆</span>
                    Global Ranks
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-600 hover:text-saffron transition-colors font-medium">
                    <span className="bg-green-100 text-green-500 p-1.5 rounded-lg mr-3 text-sm">🛡️</span>
                    Data Backup Guide
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass-dark p-6 rounded-3xl bg-gradient-to-br from-saffron to-orange-500 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-2">Daily Goal</h3>
              <p className="text-sm opacity-90 mb-4">Complete your malas today to maintain your spiritual streak.</p>
              <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-white w-2/3 h-full rounded-full"></div>
              </div>
              <p className="text-xs mt-2 text-right font-medium">65% Global Average</p>
            </div>
          </div>

          {/* Center Column: App Screenshots Gallery (Apple Vibe) */}
          <div className="lg:col-span-6">
            <div className="glass p-8 rounded-[40px] flex justify-center items-center relative overflow-hidden h-full min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
              <div className="relative z-10 w-64 md:w-72 shadow-2xl rounded-[3rem] overflow-hidden border-[6px] border-white/50 transform hover:-translate-y-2 transition-transform duration-500">
                <img src="/images/ss1.png" alt="App Screenshot Main" className="w-full h-full object-cover bg-gray-100" onError={(e) => {e.target.style.display='none'}} />
                {/* Fallback box if image missing */}
                <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-6 text-center" style={{ zIndex: -1 }}>
                  <div className="w-32 h-32 rounded-full border-8 border-saffron flex items-center justify-center text-3xl font-bold text-gray-800 mb-4">2833</div>
                  <h3 className="font-bold text-xl">Shri Radhe</h3>
                  <p className="text-xs text-gray-500 mt-2">Please upload ss1.png</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid (Bento/Sarkari Vibe) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="glass p-6 rounded-3xl hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-3">🎙️</div>
              <h3 className="font-bold text-gray-900 mb-1">Custom Audio</h3>
              <p className="text-sm text-gray-600">Record and trim your own voice for guided meditation.</p>
            </div>
            
            <div className="glass p-6 rounded-3xl hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-1">Home Widget</h3>
              <p className="text-sm text-gray-600">Chant directly from your home screen with ease.</p>
            </div>

            <div className="glass p-6 rounded-3xl hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-1">Local Backup</h3>
              <p className="text-sm text-gray-600">Export and import your devotion data safely on your device.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Promotional / Founder's Message Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass overflow-hidden rounded-[40px] relative border border-white/40 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 to-orange-500/10 pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-saffron to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-72 h-96 md:w-80 md:h-[400px] overflow-hidden rounded-2xl border-4 border-white/60 shadow-2xl">
                  <img 
                    src="/images/promo.jpg" 
                    alt="Founder" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.target.src = '/images/ss1.png'; }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="bg-orange-100 text-saffron px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block w-fit">
                Founder's Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm mb-6">
                Chant Anywhere, Connect Everywhere
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "Our mission with Japa Counter Pro is to bring simplicity, peace, and mindfulness to your daily spiritual practices. Built for devotees around the world, this ad-free platform is designed to help you focus entirely on your connection with the divine, free of distractions."
              </p>
              <div className="border-t border-gray-200/80 pt-6">
                <h4 className="font-bold text-gray-900 text-lg">Krishna Devotee</h4>
                <p className="text-sm text-saffron font-semibold">Creator & Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedbacks Section */}
      {feedbacks.length > 0 && (
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <span className="bg-orange-100 text-saffron px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-3 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm mt-3">What Devotees Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbacks.map((fb, idx) => (
              <div key={idx} className="glass p-6 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md border-t-4 border-t-saffron">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {fb.name ? fb.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 leading-tight">{fb.name}</h3>
                      <p className="text-xs text-gray-500">{fb.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-orange-400 text-sm">
                    {[...Array(fb.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">"{fb.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;
