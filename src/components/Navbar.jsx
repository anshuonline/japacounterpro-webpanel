import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="JapaCounter Pro" className="w-10 h-10 rounded-xl object-cover shadow-sm" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <div className="text-2xl hidden">🕉️</div>
          <span className="text-xl font-bold tracking-tight text-gray-900">JapaCounter Pro</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-saffron' : 'text-gray-500 hover:text-saffron'}`}>Home</Link>
          <Link to="/why-naam-jaap" className={`text-sm font-medium transition-colors ${location.pathname === '/why-naam-jaap' ? 'text-saffron' : 'text-gray-500 hover:text-saffron'}`}>Why Naam Jaap?</Link>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.japacounterpro" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-saffron to-orange-500 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all">
          Download
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
