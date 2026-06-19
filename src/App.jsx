import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyNaamJaap from './pages/WhyNaamJaap';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-900 selection:bg-saffron selection:text-white relative overflow-hidden">
        
        {/* Ambient Glowing Background (Mesh Gradient) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {/* Background Image - User can replace /images/bg.jpg with their own picture */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/bg.jpg'), url('https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=2000&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-[2px]"></div>

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
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
