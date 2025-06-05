export interface WorkItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
  content?: string; // For detailed content
  features?: string[]; // List of features
  challenges?: string[]; // Challenges faced
  results?: string[]; // Results achieved
  images?: string[]; // Additional images
}
