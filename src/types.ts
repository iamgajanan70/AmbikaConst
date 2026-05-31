/**
 * Shared Type Declarations for Ambika Constructions App
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  sizeClass: 'large' | 'medium' | 'small';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}
