export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
}

export interface ProcedureItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  time: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CareCategoryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
}

export interface LeadershipMember {
  name: string;
  title: string;
  role: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
}
