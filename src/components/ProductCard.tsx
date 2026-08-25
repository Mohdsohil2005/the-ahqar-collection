import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, Eye } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  staggerIndex?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, staggerIndex = 0 }) => {
  const [imageError, setImageError] = useState(false);
  const cardRef = useScrollReveal<HTMLDivElement>(0.1);

  // Stagger class mapping
  const staggerClass = `stagger-${Math.min((staggerIndex % 5) + 1, 5)}`;

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white rounded-2xl overflow-hidden border border-pink-100/80 shadow-pink-subtle hover:shadow-pink-hover transition-all duration-500 flex flex-col h-full perspective-1000 preserve-3d scroll-reveal ${staggerClass}`}
    >
      
      {/* Soft Pink Hover Border & 3D Layered Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-200/90 transition-colors duration-500 pointer-events-none z-20" />

      {/* Product Image Area - Controlled Height & Frame */}
      <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-gradient-to-b from-pink-50/90 via-rose-50/30 to-white flex items-center justify-center p-3">
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-white/95 text-ahqar-deep border border-pink-200/80 shadow-sm backdrop-blur-md">
              <Sparkles className="w-2.5 h-2.5 text-ahqar-rose" />
              {product.badge}
            </span>
          </div>
        )}

        {/* Product Image - object-contain ensures complete Abaya is visible without awkward cropping */}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain object-center transform group-hover:scale-104 transition-transform duration-500 ease-out filter drop-shadow-sm"
          />
        ) : (
          /* Visual Fallback Card */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-pink-50 via-rose-100/40 to-pink-100/30 relative rounded-xl">
            <div className="w-16 h-16 rounded-full bg-white/80 border border-pink-200/60 flex items-center justify-center shadow-inner mb-3 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="w-7 h-7 text-ahqar-rose animate-pulse" />
            </div>
            <span className="font-serif text-xl text-ahqar-deep font-light mb-1">
              {product.name}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-ahqar-muted font-light">
              {product.color}
            </span>
          </div>
        )}

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ahqar-deep/50 via-ahqar-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
          <button
            onClick={() => onSelect(product)}
            className="w-full py-2.5 px-4 rounded-xl bg-white/95 text-ahqar-deep text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all duration-200 shadow-md flex items-center justify-center gap-2 transform translate-y-2 group-hover:translate-y-0 active-press min-h-[44px]"
          >
            <Eye className="w-4 h-4 text-ahqar-accent" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3 bg-white">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-ahqar-text group-hover:text-ahqar-accent transition-colors duration-300 font-normal leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-ahqar-muted line-clamp-2 mt-1 font-light leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="pt-3 border-t border-pink-100/60 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-ahqar-lightMuted uppercase tracking-wider block">Price</span>
            <span className="text-lg sm:text-xl font-serif font-semibold text-ahqar-deep">
              {product.formattedPrice}
            </span>
          </div>

          <button
            onClick={() => onSelect(product)}
            className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-pink-200 text-ahqar-accent hover:bg-ahqar-blush/60 hover:border-pink-300 text-[11px] sm:text-xs tracking-wider uppercase font-medium transition-all duration-300 whitespace-nowrap min-h-[44px] flex items-center justify-center active-press"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
