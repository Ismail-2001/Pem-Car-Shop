import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-lumina-black relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lumina-charcoal to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Methodology</h2>
            <div className="h-1 w-20 bg-lumina-gold" />
          </div>
          <p className="text-gray-400 mt-6 md:mt-0 max-w-md text-right hidden md:block">
            We don't just wash cars.<br />We execute a scientific process of restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group border-l border-white/10 pl-6 py-4 hover:border-lumina-gold transition-colors duration-500"
            >
              <span className="text-5xl font-serif text-white/10 group-hover:text-lumina-gold/20 transition-colors duration-500 block mb-2">
                {step.number}
              </span>
              <h3 className="text-xl text-white font-serif mb-3 group-hover:text-lumina-gold transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;