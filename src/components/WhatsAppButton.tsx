import React from 'react';

// Official Recognizable WhatsApp SVG Icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.108 1.524 5.834L0 24l6.33-1.487C8.012 23.473 9.946 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.812 0-3.525-.478-5.016-1.312l-.36-.202-3.753.88.995-3.642-.234-.374C2.715 15.82 2 13.985 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

// Desktop Navbar Icon (Non-functional visual placeholder)
export const NavbarWhatsAppButton: React.FC = () => {
  return (
    <button
      type="button"
      aria-label="WhatsApp"
      onClick={(e) => e.preventDefault()}
      className="relative p-2 sm:p-2.5 rounded-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300 border border-transparent hover:border-emerald-200/60 flex items-center justify-center cursor-default focus:outline-none active-press"
    >
      <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

// Mobile Floating Button (Fixed at bottom-right viewport, non-functional visual placeholder)
export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 animate-gentleFloat">
      <button
        type="button"
        aria-label="WhatsApp"
        onClick={(e) => e.preventDefault()}
        className="w-14 h-14 sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/40 flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-92 cursor-default focus:outline-none active-press"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </button>
    </div>
  );
};
