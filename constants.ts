import { ServicePackage, Testimonial, ProcessStep } from './types';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Concierge', href: '#concierge' },
];

export const SERVICES: ServicePackage[] = [
  {
    id: 's1',
    title: 'The Maintenance',
    price: 'From $150',
    description: 'A meticulous maintenance wash designed to preserve your vehicle’s pristine condition.',
    features: ['PH-Neutral Hand Wash', 'Wheel Decontamination', 'Interior Vacuum & Wipe', 'Tire Dressing', 'Streak-Free Glass'],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 's2',
    title: 'The Signature',
    price: 'From $450',
    description: 'Our defining treatment. Deep correction and protection for the discerning enthusiast.',
    features: ['Everything in Maintenance', 'Clay Bar Treatment', '1-Step Paint Correction', 'Ceramic Sealant (6-Month)', 'Leather Conditioning'],
    image: 'https://images.unsplash.com/photo-1552975086-99597e2601cb?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 's3',
    title: 'The Restoration',
    price: 'From $1,200',
    description: 'A complete transformation. Resetting your vehicle to showroom standards.',
    features: ['Multi-Stage Paint Correction', '5-Year Ceramic Coating', 'Wheels-Off Detail', 'Engine Bay Detail', 'Full Interior Shampoo'],
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Assessment',
    description: 'Every vehicle undergoes a 30-point inspection under specialized lighting to identify paint defects.',
  },
  {
    number: '02',
    title: 'Decontamination',
    description: 'Chemical and mechanical removal of embedded iron, tar, and organic contaminants.',
  },
  {
    number: '03',
    title: 'Correction',
    description: 'Micro-polishing paintwork to remove swirls and scratches, maximizing gloss and depth.',
  },
  {
    number: '04',
    title: 'Protection',
    description: 'Application of silica-based ceramic coatings or paint protection film for enduring resilience.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alexander V.",
    role: "Collector",
    car: "Porsche 911 GT3",
    content: "Lumina understands that a car isn't just a machine. Their attention to detail on my GT3 was surgical. The paint looks liquid."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "CEO",
    car: "Range Rover Autobiography",
    content: "I've tried every 'luxury' detailer in the city. None compare to the consistency and professionalism found here."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Architect",
    car: "Aston Martin DB11",
    content: "A flawless experience from booking to pickup. The ceramic coating has performed perfectly for over a year."
  }
];