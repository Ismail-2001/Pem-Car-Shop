import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-lumina-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Curated Packages</h2>
          <div className="h-1 w-20 bg-lumina-gold mx-auto" />
          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Tailored treatments designed to restore, enhance, and protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`group relative flex flex-col ${service.featured ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              <div className={`glass-panel h-full p-8 flex flex-col transition-all duration-500 hover:border-lumina-gold/30 ${service.featured ? 'border-lumina-gold/50 bg-lumina-gold/5' : ''}`}>
                
                {/* Image Area */}
                <div className="h-48 mb-6 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-lumina-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="mb-auto">
                  <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                  <p className="text-lumina-gold font-medium mb-4">{service.price}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-lumina-gold mr-3 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-3 text-sm uppercase tracking-wider font-semibold transition-colors duration-300 ${
                  service.featured 
                    ? 'bg-lumina-gold text-lumina-black hover:bg-white' 
                    : 'bg-white/5 text-white hover:bg-lumina-gold hover:text-lumina-black'
                }`}>
                  Select Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;