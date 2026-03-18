export interface Project {
  id: number;
  title: string;
  category: 'Metalistería' | 'Aluminio' | 'Tiny Houses';
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  isTinyHouse?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum FormStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error'
}