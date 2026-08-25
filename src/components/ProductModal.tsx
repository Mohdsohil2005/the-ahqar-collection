import React, { useState } from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, MessageCircle, ShieldCheck, Truck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [imageError, setImageError] = useState(false);
  const [inquired, setInquired] = useState(false);

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[1] || product.sizes[0];

  const handleWhatsAppInquiry = () => {
    setInquired(true);
    const message = encodeURIComponent(
      `Hello The Ahqar Collection! I am interested in ordering the ${product.name} (${product.formattedPrice}, Size: ${currentSize}). Could you please share more details?`
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
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-ahqar-deep shadow-md transition-colors border border-pink-100"
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
              className="w-full h-full object-contain max-h-[360px] md:max-h-none filter drop-shadow-md"
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
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-widest bg-white/90 text-ahqar-deep border border-pink-200 shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Side: Product Details & Inquiry */}
        <div className="p-5 sm:p-8 flex flex-col justify-between space-y-5 bg-white">
          <div className="space-y-3 sm:space-y-4">
            
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-ahqar-rose font-medium">
              {product.fabric}
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif text-ahqar-text font-normal leading-tight">
              {product.name}
            </h2>

            <div className="text-xl sm:text-2xl font-serif font-semibold text-ahqar-deep">
              {product.formattedPrice}
            </div>

            <p className="text-xs sm:text-sm text-ahqar-muted leading-relaxed font-light">
              {product.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-pink-100 text-xs text-ahqar-muted">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ahqar-text">Craftsmanship:</span>
                <span>{product.work}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ahqar-text">Set Includes:</span>
                <span>{product.includes}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-[11px] uppercase tracking-wider text-ahqar-text font-semibold block">
                Select Length / Size:
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs tracking-wider transition-all duration-200 ${
                      currentSize === size
                        ? 'bg-ahqar-deep text-white font-semibold shadow-sm'
                        : 'bg-pink-50 text-ahqar-muted hover:bg-pink-100 border border-pink-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-3 border-t border-pink-100">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium text-xs uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-2"
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

