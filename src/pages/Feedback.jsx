import { useState, useEffect } from 'react';

function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-transparent relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">App Feedback</h1>
          <div className="h-1.5 w-16 bg-gradient-to-r from-saffron to-orange-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600">Help us improve Japa Counter Pro. Your input is valuable!</p>
        </div>

        {submitted ? (
          <div className="glass rounded-[2rem] p-12 text-center shadow-lg animate-[fadeIn_0.5s_ease-out]">
            <div className="text-6xl mb-6">🙏</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg">Your feedback has been successfully submitted. We deeply appreciate your time and devotion.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 bg-gradient-to-r from-saffron to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="glass rounded-[2rem] p-8 md:p-10 shadow-lg relative overflow-hidden">
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={() => {}}></iframe>
            
            <form 
              action="https://docs.google.com/forms/d/e/1FAIpQLSczrTpYYgtoSq6AbTOr33O92eYa0BSK3TjlVTvPcWbK3FSoYQ/formResponse" 
              method="POST" 
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name <span className="text-saffron">*</span></label>
                  <input type="text" name="entry.158079343" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white/50" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address <span className="text-saffron">*</span></label>
                  <input type="email" name="entry.396836770" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white/50" placeholder="your@email.com" />
                </div>
              </div>

              {/* Usage */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">How often do you use Japa Counter Pro? <span className="text-saffron">*</span></label>
                <div className="space-y-2">
                  {['Daily', 'Weekly', 'Occasionally (Less than once a week)'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-white/60 cursor-pointer transition-colors">
                      <input type="radio" name="entry.1163556189" value={opt} required className="w-4 h-4 text-saffron focus:ring-saffron" />
                      <span className="text-gray-700 text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Grid Rating */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Rate the following features (1 = Poor, 5 = Excellent) <span className="text-saffron">*</span></label>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50/50">
                      <tr>
                        <th className="px-4 py-3 font-medium text-gray-600 rounded-tl-xl">Feature</th>
                        {[1,2,3,4,5].map(n => <th key={n} className="px-2 py-3 text-center font-medium text-gray-600">{n}</th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: 'Counter Accuracy', entry: 'entry.327402372' },
                        { name: 'User Interface (UI) Design', entry: 'entry.1971105143' },
                        { name: 'Sound/Vibration Feedback', entry: 'entry.1304100273' },
                        { name: 'History/Analytics Tracking', entry: 'entry.522835750' }
                      ].map((feature, i) => (
                        <tr key={feature.name} className="hover:bg-white/40">
                          <td className="px-4 py-4 text-gray-700 font-medium">{feature.name}</td>
                          {[1,2,3,4,5].map(n => (
                            <td key={n} className="px-2 py-4 text-center">
                              <input type="radio" name={feature.entry} value={n} required className="w-4 h-4 text-saffron focus:ring-saffron" />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Text Areas */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">What do you like MOST about the app? <span className="text-saffron">*</span></label>
                <textarea name="entry.1171803593" required rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white/50 resize-none" placeholder="Your experience..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">What new features or enhancements would you like to see? <span className="text-saffron">*</span></label>
                <textarea name="entry.856109844" required rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white/50 resize-none" placeholder="Suggestions..."></textarea>
              </div>

              {/* Bugs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 bg-orange-50/50 rounded-2xl border border-orange-100">
                <div className="md:col-span-4">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Did you experience any bugs/crashes? <span className="text-saffron">*</span></label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="entry.1642815997" value="Yes" required className="w-4 h-4 text-saffron focus:ring-saffron" />
                      <span className="text-gray-700 text-sm font-medium">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="entry.1642815997" value="No" required className="w-4 h-4 text-saffron focus:ring-saffron" />
                      <span className="text-gray-700 text-sm font-medium">No</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">If 'Yes', please describe the issue <span className="text-saffron">*</span></label>
                  <input type="text" name="entry.269039636" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white/80" placeholder="Describe the bug here..." />
                  <p className="text-xs text-gray-500 mt-1">Write 'None' if you selected No.</p>
                </div>
              </div>

              {/* Overall Satisfaction */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4 text-center">Overall Satisfaction Rating <span className="text-saffron">*</span></label>
                <div className="flex justify-center gap-2 sm:gap-6">
                  {[1,2,3,4,5].map(n => (
                    <label key={n} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <input type="radio" name="entry.607695909" value={n} required className="sr-only peer" />
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-gray-200 text-gray-500 font-bold peer-checked:bg-saffron peer-checked:border-saffron peer-checked:text-white peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-saffron transition-all group-hover:border-saffron">
                        {n}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-gray-100 flex justify-center">
                <button type="submit" className="bg-gradient-to-r from-saffron to-orange-500 text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
                  Submit Feedback
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback;
