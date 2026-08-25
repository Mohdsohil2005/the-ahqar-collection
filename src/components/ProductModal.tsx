import React, { useState } from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, MessageCircle, ShieldCheck, Truck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const [inquired, setInquired] = useState(false);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    setInquired(true);
    const message = encodeURIComponent(
      `Hello The Ahqar Collection! I am interested in ordering the ${product.name} (${product.formattedPrice}, Size: ${product.size}). Could you please share more details?`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeInUp">
      {/* Backdrop Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-ahqar-deep/40 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-pink-100 z-10 grid grid-cols-1 md:grid-cols-2 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-ahqar-deep shadow-md transition-colors border border-pink-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Display */}
        <div className="relative h-64 sm:h-80 md:h-full w-full bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100/40 flex items-center justify-center p-4 overflow-hidden">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-contain max-h-[340px] md:max-h-none filter drop-shadow-md"
            />
          ) : (
            <div className="p-6 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/80 border border-pink-200 flex items-center justify-center shadow-inner">
                <Sparkles className="w-8 h-8 text-ahqar-rose animate-pulse" />
              </div>
              <h3 className="font-serif text-2xl text-ahqar-deep">{product.name}</h3>
              <p className="text-xs text-ahqar-muted uppercase tracking-widest">{product.color}</p>
            </div>
          )}

          {product.badge && (
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-white/95 text-ahqar-deep border border-pink-200 shadow-sm backdrop-blur-md">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Side: Product Details & Hierarchy */}
        <div className="p-5 sm:p-8 flex flex-col justify-between space-y-5 bg-white">
          <div className="space-y-4">
            
            {/* Product Name */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ahqar-text font-normal leading-snug">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-ahqar-rose font-medium tracking-wide mt-1">
                {product.subtitle}
              </p>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-serif font-semibold text-ahqar-deep">
              {product.formattedPrice}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-ahqar-muted leading-relaxed font-light">
              {product.description}
            </p>

            {/* Information Specs Cards (Work, Color, Size) */}
            <div className="space-y-2.5 pt-2 border-t border-pink-100/80">
              {/* Work */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-pink-50/60 border border-pink-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-ahqar-deep uppercase tracking-wider text-[10px]">Work</span>
                <span className="text-ahqar-text font-medium">{product.work}</span>
              </div>

              {/* Color */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-pink-50/60 border border-pink-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-ahqar-deep uppercase tracking-wider text-[10px]">Color</span>
                <span className="text-ahqar-text font-medium">{product.color}</span>
              </div>

              {/* Fixed Size (Informational) */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-pink-50/60 border border-pink-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-ahqar-deep uppercase tracking-wider text-[10px]">Size</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white border border-pink-200 text-ahqar-deep font-semibold tracking-wide">
                  {product.size}
                </span>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-3 border-t border-pink-100">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium text-xs uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire / Order via WhatsApp</span>
            </button>

            {inquired && (
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 bg-emerald-50 py-2 rounded-lg">
                <Check className="w-4 h-4" />
                <span>WhatsApp chat window opened!</span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-[10px] sm:text-[11px] text-ahqar-lightMuted">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-ahqar-rose" /> 100% Authentic Quality
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-ahqar-rose" /> Express India Shipping
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
