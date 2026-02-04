import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  'https://images.unsplash.com/photo-1605218427306-6354db696faa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1580273916550-e323be2eb203?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-lumina-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-white mb-12 text-center md:text-left">
          The Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img 
                src={src} 
                alt="Detailing Work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-white/0 group-hover:border-white/10 m-4">
                 <span className="text-white font-serif italic text-xl tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   View Detail
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;