import React from 'react';
import { X, Heart, Sparkles, Shield, Award } from 'lucide-react';
import { Logo } from './Logo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeInUp">
      <div onClick={onClose} className="fixed inset-0 bg-ahqar-deep/40 backdrop-blur-md" />

      <div className="relative bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-pink-100 z-10 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-ahqar-deep transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <Logo variant="modal" />
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-ahqar-rose to-transparent mx-auto mt-2" />
        </div>

        <div className="space-y-4 text-ahqar-muted text-sm leading-relaxed font-light">
          <h3 className="font-serif text-2xl text-ahqar-text text-center font-normal">
            Grace, Modesty & Timeless Indian Artistry
          </h3>
          <p>
            Welcome to <strong>The Ahqar Collection</strong>. Born out of a deep passion for luxury modesty, we craft bespoke Indian Abayas that blend traditional elegance with contemporary, flowing silhouettes.
          </p>
          <p>
            Every piece in our boutique collection is meticulously constructed using handpicked imported silks, georgette, and zoom fabrics, embellished with delicate zari work, velvet trims, and pearl lattice.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-pink-100 text-center">
          <div className="p-3 bg-pink-50/60 rounded-2xl space-y-1">
            <Heart className="w-5 h-5 mx-auto text-ahqar-rose" />
            <div className="text-xs font-semibold text-ahqar-text">Feminine Cut</div>
            <div className="text-[10px] text-ahqar-muted">Tailored Grace</div>
          </div>
          <div className="p-3 bg-pink-50/60 rounded-2xl space-y-1">
            <Sparkles className="w-5 h-5 mx-auto text-ahqar-rose" />
            <div className="text-xs font-semibold text-ahqar-text">Handcrafted</div>
            <div className="text-[10px] text-ahqar-muted">Indian Zari & Embroidery</div>
          </div>
          <div className="p-3 bg-pink-50/60 rounded-2xl space-y-1">
            <Shield className="w-5 h-5 mx-auto text-ahqar-rose" />
            <div className="text-xs font-semibold text-ahqar-text">Premium Fabrics</div>
            <div className="text-[10px] text-ahqar-muted">Nida Silk & Georgette</div>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-ahqar-deep text-white text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
