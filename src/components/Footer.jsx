import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">
          
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <div className="hidden">🕉️</div>
              <span className="text-lg font-bold text-gray-900">JapaCounter Pro</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">Your spiritual journey, digitized and modernized. Built for peace.</p>
          </div>
          
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 text-sm tracking-wider uppercase">Quick Links</h4>
              <Link to="/" className="text-gray-500 hover:text-saffron transition-colors text-sm">Home</Link>
              <Link to="/why-naam-jaap" className="text-gray-500 hover:text-saffron transition-colors text-sm">Why Naam Jaap?</Link>
              <Link to="/feedback" className="text-gray-500 hover:text-saffron transition-colors text-sm">Send Feedback</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 text-sm tracking-wider uppercase">Legal</h4>
              <Link to="/privacy" className="text-gray-500 hover:text-saffron transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-saffron transition-colors text-sm">Terms & Conditions</Link>
            </div>
          </div>
          
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm mb-6">
              Get the App
            </a>
            
            {/* Website Stats */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Total Visitors:</span>
                <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fjapacounterpro.hypecrews.com&countColor=%23f97316&labelColor=%231f2937" alt="Total Visitors" className="h-5 rounded shadow-sm" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Last Updated:</span>
                <span>June 15, 2026</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="text-center border-t border-gray-100 pt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hypecrews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
