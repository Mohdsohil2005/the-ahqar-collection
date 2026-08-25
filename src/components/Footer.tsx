import React from 'react';
import { Logo } from './Logo';
import { Instagram, MessageCircle, Heart, Share2, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAbout, onOpenContact }) => {
  
  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'collection') {
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'about') {
      onOpenAbout();
    } else if (tab === 'contact') {
      onOpenContact();
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-pink-50/60 to-rose-100/40 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-pink-100/80 mt-16 sm:mt-20 overflow-hidden max-w-full">
      
      {/* Background Soft Glow */}
      <div className="pink-ambient-blob w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] -bottom-20 -left-20 bg-pink-200/30" />
      <div className="pink-ambient-blob w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] -bottom-20 -right-20 bg-rose-200/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 pb-8 sm:pb-12 border-b border-pink-200/50">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-3 sm:space-y-4 text-center sm:text-left">
            <button onClick={() => handleNav('home')} className="focus:outline-none inline-flex items-center gap-3">
              <Logo variant="footer" />
              <span className="font-serif text-xl sm:text-2xl text-ahqar-deep font-medium tracking-tight">
                The Ahqar <span className="text-ahqar-rose italic">Collection</span>
              </span>
            </button>

            <p className="text-xs sm:text-sm text-ahqar-muted font-light leading-relaxed max-w-md mx-auto sm:mx-0">
              Handcrafted Indian Abayas designed with elegance, modesty, and luxury tailoring for the modern woman. Embracing graceful modesty and timeless style.
            </p>

            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-ahqar-rose uppercase tracking-widest font-medium pt-1">
              <Sparkles className="w-3 h-3" />
              <span>Bespoke Indian Modest Fashion</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3 text-center sm:text-left">
            <h4 className="font-serif text-base sm:text-lg text-ahqar-text font-normal uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[11px] sm:text-xs uppercase tracking-widest text-ahqar-muted">
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  className="hover:text-ahqar-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collection')}
                  className="hover:text-ahqar-accent transition-colors"
                >
                  Our Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')}
                  className="hover:text-ahqar-accent transition-colors"
                >
                  About Our Brand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  className="hover:text-ahqar-accent transition-colors"
                >
                  Contact & Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Connect Column */}
          <div className="sm:col-span-2 md:col-span-4 space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="font-serif text-base sm:text-lg text-ahqar-text font-normal uppercase tracking-wider">
              Connect With Us
            </h4>
            <p className="text-xs text-ahqar-muted font-light max-w-sm mx-auto sm:mx-0">
              Follow our latest couture releases, styling guides, and behind-the-scenes artistry.
            </p>

            <div className="flex items-center justify-center sm:justify-start space-x-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-white text-ahqar-deep hover:text-ahqar-accent hover:bg-pink-100 shadow-sm border border-pink-100 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-white text-ahqar-deep hover:text-emerald-700 hover:bg-emerald-50 shadow-sm border border-pink-100 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-white text-ahqar-deep hover:text-rose-600 hover:bg-rose-50 shadow-sm border border-pink-100 transition-all duration-300"
                aria-label="Pinterest"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-ahqar-lightMuted font-light text-center sm:text-left">
          <p>© 2026 The Ahqar Collection. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-ahqar-rose fill-ahqar-rose" /> for Modern Modesty
          </p>
        </div>
      </div>
    </footer>
  );
};

