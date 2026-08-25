import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface CollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Collection: React.FC<CollectionProps> = ({ products, onSelectProduct }) => {
  return (
    <section id="collection" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto overflow-hidden">
      
      {/* Soft Ambient Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-pink-100/30 via-rose-100/20 to-pink-50/20 blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        
        <div className="inline-flex items-center gap-2 text-ahqar-rose text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Edition</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ahqar-text font-light tracking-tight">
          Our <span className="italic text-ahqar-accent">Collection</span>
        </h2>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-ahqar-rose to-transparent mx-auto" />

        <p className="text-xs sm:text-sm md:text-base text-ahqar-muted font-light leading-relaxed px-2">
          Explore our signature selection of 5 bespoke Indian Abayas, lovingly handcrafted with delicate accents, opulent fabrics, and modest perfection.
        </p>
      </div>

      {/* Product Grid - Responsive 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-md sm:max-w-none mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>

      {/* Footer Info Notice */}
      <div className="mt-12 sm:mt-16 text-center px-2">
        <p className="text-[11px] sm:text-xs text-ahqar-lightMuted tracking-wider font-light">
          ✦ Every Abaya in The Ahqar Collection is custom-tailored with premium finishing & complimentary matching Sheila ✦
        </p>
      </div>
    </section>
  );
};

