export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  formattedPrice: string;
  description: string;
  fabric: string;
  work: string;
  includes: string;
  image: string;
  badge?: string;
  color: string;
  sizes: string[];
}

export type ActiveTab = 'home' | 'collection' | 'about' | 'contact';
