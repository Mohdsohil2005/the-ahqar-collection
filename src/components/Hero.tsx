import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden max-w-full">
      
      {/* ===== ABSTRACT ORGANIC PINK PAINT-SPLASH & WATERCOLOR BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* 1. Top-Left Organic Paint Splash (Soft Blush & Rose) */}
        <div 
          className="paint-splash-blob animate-paint-1 w-[260px] sm:w-[480px] lg:w-[600px] h-[240px] sm:h-[440px] lg:h-[540px] -top-12 -left-12 bg-gradient-to-br from-pink-200/70 via-rose-200/50 to-pink-300/20 blur-2xl sm:blur-3xl opacity-75 sm:opacity-85"
          style={{ borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%', transform: 'rotate(-12deg)' }}
        />

        {/* 2. Top-Right Watercolor Layer (Pastel Pink & Warm Amber Accent) */}
        <div 
          className="paint-splash-blob animate-paint-2 w-[240px] sm:w-[440px] lg:w-[560px] h-[230px] sm:h-[400px] lg:h-[500px] -top-8 -right-10 bg-gradient-to-bl from-rose-300/60 via-pink-200/40 to-amber-100/20 blur-2xl sm:blur-3xl opacity-70 sm:opacity-80"
          style={{ borderRadius: '65% 35% 28% 72% / 54% 39% 61% 46%', transform: 'rotate(20deg)' }}
        />

        {/* 3. Mid-Right Darker Elegant Pink Accent Splash */}
        <div 
          className="paint-splash-blob animate-paint-3 w-[160px] sm:w-[320px] lg:w-[400px] h-[160px] sm:h-[300px] lg:h-[360px] top-[22%] right-[5%] sm:right-[12%] bg-gradient-to-br from-ahqar-accent/40 via-rose-400/30 to-pink-200/10 blur-xl sm:blur-2xl opacity-60 sm:opacity-75"
          style={{ borderRadius: '44% 56% 32% 68% / 60% 30% 70% 40%', transform: 'rotate(-8deg)' }}
        />

        {/* 4. Bottom-Left Soft Fluid Watercolor Flow */}
        <div 
          className="paint-splash-blob animate-paint-1 w-[250px] sm:w-[460px] lg:w-[580px] h-[230px] sm:h-[420px] lg:h-[520px] -bottom-16 -left-10 bg-gradient-to-tr from-pink-200/65 via-rose-100/45 to-transparent blur-2xl sm:blur-3xl opacity-70 sm:opacity-80"
          style={{ borderRadius: '71% 29% 45% 55% / 32% 65% 35% 68%', transform: 'rotate(15deg)' }}
        />

        {/* 5. Bottom-Right Rose Gold Organic Paint Blot */}
        <div 
          className="paint-splash-blob animate-paint-2 w-[220px] sm:w-[400px] lg:w-[480px] h-[210px] sm:h-[380px] lg:h-[440px] -bottom-12 -right-12 bg-gradient-to-tl from-ahqar-gold/45 via-pink-200/35 to-rose-100/15 blur-2xl sm:blur-3xl opacity-65 sm:opacity-75"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', transform: 'rotate(-25deg)' }}
        />

        {/* 6. Subtle Organic Paint Splatter Droplets Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-25 sm:opacity-35" xmlns="http://www.w3.org/2000/svg">
          <g fill="#e4a5b9">
            {/* Top-left splatters */}
            <circle cx="8%" cy="18%" r="4" opacity="0.6" />
            <circle cx="12%" cy="12%" r="7" opacity="0.4" />
            <circle cx="15%" cy="22%" r="3" opacity="0.7" />
            <circle cx="6%" cy="28%" r="5" opacity="0.5" />

            {/* Top-right splatters */}
            <circle cx="88%" cy="15%" r="6" opacity="0.5" />
            <circle cx="92%" cy="24%" r="4" opacity="0.7" />
            <circle cx="82%" cy="20%" r="3" opacity="0.6" />

            {/* Bottom splatters */}
            <circle cx="14%" cy="82%" r="5" opacity="0.5" />
            <circle cx="85%" cy="85%" r="6" opacity="0.6" />
            <circle cx="89%" cy="78%" r="3" opacity="0.4" />
          </g>
        </svg>

        {/* 7. Center Soft White Radial Vignette for High Text Readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,245,247,0.85)_0%,rgba(250,245,247,0.45)_55%,transparent_85%)] pointer-events-none" />
      </div>
      {/* =================================================================== */}

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fadeInUp">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/60 shadow-pink-subtle backdrop-blur-md">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-ahqar-accent flex-shrink-0" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-ahqar-deep font-semibold">
            Indian Couture & Luxury Abaya House
          </span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-ahqar-accent flex-shrink-0" />
        </div>

        {/* Main Title */}
        <div className="space-y-3 sm:space-y-4 max-w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-ahqar-text leading-[1.1] font-light break-words">
            The Ahqar <span className="italic font-normal text-ahqar-accent font-serif">Collection</span>
          </h1>

          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-ahqar-rose to-transparent mx-auto my-3 sm:my-4" />

          {/* Subtitle */}
          <p className="text-xs sm:text-lg md:text-2xl font-light text-ahqar-muted tracking-wider sm:tracking-widest uppercase font-serif px-2">
            Elegance. Modesty. Timeless Style.
          </p>
        </div>

        {/* Brand Narrative */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base text-ahqar-muted leading-relaxed font-light px-2">
          Crafted with exquisite Indian tailoring, soft flowing silhouettes, and modern modesty. 
          Discover our curated collection designed to glorify grace and subtle sophistication.
        </p>

        {/* Call To Action Buttons */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-ahqar-rose via-ahqar-gold to-ahqar-accent text-white font-medium tracking-widest text-xs uppercase shadow-pink-hover hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Explore Collection</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Decorative Floating Icon Indicator */}
        <div className="pt-8 sm:pt-12 hidden sm:block">
          <button
            onClick={onExploreClick}
            aria-label="Scroll to collection"
            className="p-3 rounded-full border border-pink-200/50 text-ahqar-muted hover:text-ahqar-accent hover:border-pink-300 transition-all duration-300 animate-float"
          >
            <ArrowDown className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};


