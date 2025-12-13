export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'metalisteria' | 'aluminio' | 'tiny-houses';
  imageUrl: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
