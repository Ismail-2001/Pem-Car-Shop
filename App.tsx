import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Concierge from './components/Concierge';
import { TESTIMONIALS } from './constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <footer className="bg-lumina-black border-t border-white/10 py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h3 className="font-serif text-2xl text-white mb-2">LUMINA</h3>
        <p className="text-gray-500 text-sm">Automotive Aesthetics & Protection</p>
      </div>
      <div className="flex gap-8 text-sm text-gray-400">
        <a href="#" className="hover:text-lumina-gold transition-colors">Instagram</a>
        <a href="#" className="hover:text-lumina-gold transition-colors">Twitter</a>
        <a href="#" className="hover:text-lumina-gold transition-colors">LinkedIn</a>
      </div>
      <p className="text-gray-600 text-xs">
        © {new Date().getFullYear()} Lumina Auto Spa. All rights reserved.
      </p>
    </div>
  </footer>
);

const TestimonialCarousel: React.FC = () => (
  <section className="py-24 bg-lumina-charcoal">
     <div className="max-w-5xl mx-auto px-6 text-center">
        <Quote className="w-12 h-12 text-lumina-gold mx-auto mb-10 opacity-50" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
             <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-8 rounded border border-white/5"
             >
                <p className="text-gray-300 font-serif italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider text-sm">{t.name}</h4>
                  <p className="text-lumina-gold text-xs mt-1">{t.car}</p>
                </div>
             </motion.div>
          ))}
        </div>
     </div>
  </section>
);

function App() {
  // Global Smooth Scroll Handler
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if clicked element is an anchor with a hash link
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Calculate position with offset for fixed header
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Update URL hash without jumping
          window.history.pushState(null, '', targetId);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-lumina-black min-h-screen text-white antialiased selection:bg-lumina-gold selection:text-lumina-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Concierge />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;