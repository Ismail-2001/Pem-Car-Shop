export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  car: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export enum ConciergeStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RECOMMENDING = 'RECOMMENDING',
  ERROR = 'ERROR'
}

export interface RecommendationResponse {
  packageName: string;
  estimatedPrice: string;
  reasoning: string;
  estimatedDuration: string;
}