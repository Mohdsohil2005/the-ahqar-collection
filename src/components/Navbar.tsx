import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { NavbarWhatsAppButton } from './WhatsAppButton';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCart?: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAbout,
  onOpenContact,
  cartCount = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'collection') {
      const el = document.getElementById('collection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'about') {
      onOpenAbout();
    } else if (tab === 'contact') {
      onOpenContact();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-full overflow-x-hidden ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-pink-100/80 shadow-pink-subtle' 
        : 'bg-white/85 backdrop-blur-sm border-b border-pink-100/50'
    }`}>
      {/* Top Subtle Luxury Announcement Strip */}
      <div className="bg-gradient-to-r from-rose-100/40 via-pink-100/60 to-rose-100/40 py-1 px-3 text-center text-[10px] sm:text-xs text-ahqar-deep tracking-wider font-medium flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles className="w-3 h-3 text-ahqar-rose animate-pulse flex-shrink-0" />
        <span className="truncate">Bespoke Indian Abayas & Handcrafted Luxury Couture</span>
        <Sparkles className="w-3 h-3 text-ahqar-rose animate-pulse flex-shrink-0" />
      </div>

      {/* Main Navbar Container - Controlled height: ~56-64px mobile, ~64-72px desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 md:h-[68px] flex items-center justify-between">
        
        {/* Left: Circular Logo & Brand Title */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none flex-shrink-0 group"
          aria-label="The Ahqar Collection Home"
        >
          <Logo variant="navbar" />
          <span className="font-serif text-base sm:text-xl md:text-2xl text-ahqar-deep font-medium tracking-tight group-hover:text-ahqar-accent transition-colors duration-300">
            The Ahqar <span className="text-ahqar-rose italic font-serif">Collection</span>
          </span>
        </button>

        {/* Center/Right: Desktop Navigation Links (Switches seamlessly to mobile menu at lg breakpoint) */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 relative py-1 font-medium ${
              activeTab === 'home'
                ? 'text-ahqar-deep font-semibold'
                : 'text-ahqar-muted hover:text-ahqar-accent'
            }`}
          >
            Home
            {activeTab === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ahqar-rose to-ahqar-gold rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('collection')}
            className={`text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 relative py-1 font-medium ${
              activeTab === 'collection'
                ? 'text-ahqar-deep font-semibold'
                : 'text-ahqar-muted hover:text-ahqar-accent'
            }`}
          >
            Collection
            {activeTab === 'collection' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ahqar-rose to-ahqar-gold rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="text-xs xl:text-sm tracking-widest uppercase text-ahqar-muted hover:text-ahqar-accent transition-all duration-300 py-1 font-medium"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="text-xs xl:text-sm tracking-widest uppercase text-ahqar-muted hover:text-ahqar-accent transition-all duration-300 py-1 font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Far Right: Shopping Bag/Cart Icon, WhatsApp Icon & Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
          {/* Desktop & Tablet WhatsApp Icon (Hidden on mobile) */}
          <div className="hidden sm:block">
            <NavbarWhatsAppButton />
          </div>

          {/* Cart Icon */}
          <button
            onClick={() => handleNavClick('collection')}
            className="relative p-2 sm:p-2.5 rounded-full text-ahqar-deep hover:bg-ahqar-blush/60 transition-all duration-300 border border-transparent hover:border-pink-200/60 flex items-center justify-center"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-gradient-to-r from-ahqar-rose to-ahqar-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile/Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-ahqar-deep hover:bg-ahqar-blush/60 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.75]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-pink-100 px-4 sm:px-6 pt-3 pb-5 space-y-2 shadow-pink-hover w-full animate-fadeInUp z-50">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-sm tracking-wider uppercase font-medium py-2.5 px-4 rounded-xl transition-colors ${
                activeTab === 'home' ? 'bg-ahqar-blush text-ahqar-deep font-semibold' : 'text-ahqar-text hover:bg-pink-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('collection')}
              className={`text-left text-sm tracking-wider uppercase font-medium py-2.5 px-4 rounded-xl transition-colors ${
                activeTab === 'collection' ? 'bg-ahqar-blush text-ahqar-deep font-semibold' : 'text-ahqar-text hover:bg-pink-50'
              }`}
            >
              Collection
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-sm tracking-wider uppercase font-medium text-ahqar-text hover:bg-pink-50 py-2.5 px-4 rounded-xl"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-sm tracking-wider uppercase font-medium text-ahqar-text hover:bg-pink-50 py-2.5 px-4 rounded-xl"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};


