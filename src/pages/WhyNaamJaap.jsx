import { useEffect } from 'react';

function WhyNaamJaap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-[fadeIn_0.5s_ease-out]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Why Naam Jaap?</h1>
          <div className="h-1.5 w-16 bg-gradient-to-r from-saffron to-orange-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">In the age of Kaliyuga, chanting is the simplest path to supreme peace.</p>
        </div>

        <div className="glass rounded-[2rem] p-8 md:p-12 shadow-lg animate-[fadeIn_0.6s_ease-out]">
          
          <div className="mb-12 rounded-2xl overflow-hidden shadow-md">
            <img src="/images/banner-naam-jaap.png" alt="Naam Jaap Meaning" className="w-full h-auto object-cover" onError={(e) => e.target.style.display = 'none'} />
          </div>

          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Universal Truth</h2>
            <p className="mb-8">
              Regardless of your religion, caste, creed, or background, the name of the Divine holds immense power. It transcends all human-made boundaries. God is one, and calling out to the ultimate reality connects your soul directly to the source of all existence.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Kaliyuga Effect</h2>
            <p className="mb-8">
              Ancient scriptures and spiritual masters agree that in Kaliyuga—the current age characterized by distraction, stress, and conflict—complex rituals, strict asceticism, and deep meditation are extremely difficult for the average human to maintain. 
              The easiest, most accessible, and most effective way to purify the mind and attain spiritual elevation is simply repeating the Holy Name (Naam Jaap).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scientific & Mental Benefits</h2>
            <ul className="list-disc pl-5 mb-10 space-y-3">
              <li><strong className="text-gray-900">Reduces Anxiety:</strong> Rhythmic chanting slows down your breathing and heart rate, activating the parasympathetic nervous system.</li>
              <li><strong className="text-gray-900">Improves Focus:</strong> It trains the monkey mind to concentrate on a single point, replacing chaotic negative thought patterns with a singular, positive vibration.</li>
              <li><strong className="text-gray-900">Emotional Stability:</strong> Regular chanting acts as an emotional shield against daily stress and cultivates a deep sense of inner joy.</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-saffron p-6 rounded-r-xl italic text-lg text-saffron font-medium">
              "The Holy Name is the only shelter in this age of Kali. By chanting it, one is freed from all anxieties."
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default WhyNaamJaap;
