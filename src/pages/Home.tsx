import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Collection } from '../components/Collection';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { AboutModal } from '../components/AboutModal';
import { ContactModal } from '../components/ContactModal';
import { Footer } from '../components/Footer';
import { FloatingWhatsAppButton } from '../components/WhatsAppButton';
import { PRODUCTS } from '../data/products';
import { Product, ActiveTab } from '../types';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleExploreClick = () => {
    setActiveTab('collection');
    const collectionEl = document.getElementById('collection');
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ahqar-bg text-ahqar-text font-sans w-full max-w-full overflow-x-hidden">
      
      {/* Sticky Glassmorphism Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        cartCount={0}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Luxury Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 5 Abaya Product Collection Section */}
        <Collection
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />
      </main>

      {/* Mobile Fixed Floating WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Product Details & WhatsApp Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* About Brand Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
};

