import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-lumina-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Curated Packages</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lumina-gold mx-auto" 
          />
          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Tailored treatments designed to restore, enhance, and protect your investment.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group relative flex flex-col ${service.featured ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              <div className={`glass-panel h-full p-8 flex flex-col transition-all duration-500 hover:border-lumina-gold/30 ${service.featured ? 'border-lumina-gold/50 bg-lumina-gold/5' : ''}`}>
                
                {/* Image Area */}
                <div className="h-48 mb-6 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Services;