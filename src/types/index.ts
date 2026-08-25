export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  formattedPrice: string;
  description: string;
  work: string;
  image: string;
  badge?: string;
  color: string;
  size: string;
}

export type ActiveTab = 'home' | 'collection' | 'about' | 'contact';
