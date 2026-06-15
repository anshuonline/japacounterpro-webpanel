import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyNaamJaap from './pages/WhyNaamJaap';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-900 selection:bg-saffron selection:text-white relative overflow-hidden">
        
        {/* Ambient Glowing Background (Mesh Gradient) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-400/50 mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute top-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-400/50 mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-saffron/40 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/why-naam-jaap" element={<WhyNaamJaap />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
