import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Send, ArrowRight } from 'lucide-react';
import { getConciergeRecommendation } from '../services/geminiService';
import { ConciergeStatus, RecommendationResponse } from '../types';

const Concierge: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<ConciergeStatus>(ConciergeStatus.IDLE);
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(ConciergeStatus.THINKING);
    try {
      const result = await getConciergeRecommendation(input);
      setRecommendation(result);
      setStatus(ConciergeStatus.RECOMMENDING);
    } catch (error) {
      console.error(error);
      setStatus(ConciergeStatus.ERROR);
    }
  };

  const handleReset = () => {
    setRecommendation(null);
    setStatus(ConciergeStatus.IDLE);
    setInput('');
  };

  return (
    <section id="concierge" className="py-24 bg-lumina-charcoal relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumina-gold/10 text-lumina-gold text-xs uppercase tracking-widest mb-4 border border-lumina-gold/20"
          >
            <Sparkles className="w-3 h-3" />
            AI Concierge
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Get a Tailored Quote
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Not sure what your vehicle needs? Tell our intelligent concierge about your car and its condition for an instant, personalized recommendation.
          </p>
        </div>

        <div className="glass-panel p-1 rounded-2xl overflow-hidden">
          <div className="bg-lumina-black/80 p-6 md:p-10 rounded-xl min-h-[400px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {status === ConciergeStatus.IDLE && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <label htmlFor="prompt" className="block text-sm text-gray-400 mb-2">
                        Tell us about your vehicle (Model, Year, Condition, Needs)
                      </label>
                      <textarea
                        id="prompt"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., I have a 2022 BMW M4 that has some swirl marks and needs a deep clean inside and out..."
                        className="w-full h-40 bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lumina-gold transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className="w-full py-4 bg-lumina-gold text-lumina-black font-semibold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Consult Concierge <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {status === ConciergeStatus.THINKING && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <Loader2 className="w-12 h-12 text-lumina-gold animate-spin mb-6" />
                  <h3 className="text-xl text-white font-serif mb-2">Analyzing your request...</h3>
                  <p className="text-gray-500 text-sm">Consulting our detailing expertise database.</p>
                </motion.div>
              )}

              {status === ConciergeStatus.RECOMMENDING && recommendation && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-left"
                >
                  <div className="border-l-2 border-lumina-gold pl-6 mb-8">
                    <p className="text-lumina-gold text-sm uppercase tracking-widest mb-2">Recommended Package</p>
                    <h3 className="text-3xl font-serif text-white mb-2">{recommendation.packageName}</h3>
                    <p className="text-2xl text-gray-300 font-light">{recommendation.estimatedPrice}</p>
                    <p className="text-sm text-gray-500 mt-1">Est. Duration: {recommendation.estimatedDuration}</p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/5 mb-8">
                    <p className="text-gray-300 leading-relaxed italic">
                      "{recommendation.reasoning}"
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 py-4 bg-lumina-gold text-lumina-black font-semibold uppercase tracking-widest hover:bg-white transition-colors">
                      Book This Service
                    </button>
                    <button 
                      onClick={handleReset}
                      className="px-6 py-4 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors uppercase tracking-widest text-sm"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}

              {status === ConciergeStatus.ERROR && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-red-400 mb-4">We encountered an issue connecting to the concierge.</p>
                  <button 
                    onClick={handleReset}
                    className="text-white underline hover:text-lumina-gold"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concierge;