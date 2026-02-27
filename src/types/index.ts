export interface InstituteInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    email: string;
    phones: string[];
    whatsapp?: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    telegram?: string;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  schedule: string;
  instructor: string;
  maxStudents: number;
  price?: string;
  image?: string;
  features: string[];
  curriculum: string[];
  rules: string[];
}

export type CourseCategory =
  | 'tajweed'
  | 'hifz'
  | 'ibadur-rahman'
  | 'momina'
  | 'alimiyat';

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  qualifications: string[];
  specializations: string[];
  languages: string[];
  yearsOfExperience: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
  courseTaken: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'seminar' | 'workshop' | 'conference' | 'webinar' | 'community';
  image?: string;
  registrationRequired: boolean;
  maxAttendees?: number;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  commitment: string;
  courses: string[];
  outcomes: string[];
  image?: string;
  featured: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'admissions' | 'courses' | 'general' | 'financial';
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  image?: string;
  overlay?: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
