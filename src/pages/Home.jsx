import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 bg-[length:400%_400%] animate-gradient pt-24 pb-20">
      
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
    </div>
  );
}

export default Home;
