import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Logo } from './Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeInUp">
      <div onClick={onClose} className="fixed inset-0 bg-ahqar-deep/40 backdrop-blur-md" />

      <div className="relative bg-white w-full max-w-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-pink-100 z-10 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-ahqar-deep transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <Logo variant="modal" />
          <h3 className="font-serif text-2xl text-ahqar-text font-normal pt-2">Get in Touch</h3>
          <p className="text-xs text-ahqar-muted font-light">
            Have questions about custom sizing, fabrics, or ordering? Send us a message!
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-pink-50 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-ahqar-text">Thank You, {name}!</h4>
            <p className="text-xs text-ahqar-muted">
              Your inquiry has been received. Our concierge team will get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-full bg-ahqar-deep text-white text-xs uppercase tracking-widest"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-ahqar-text font-medium block mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ayesha Khan"
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:border-ahqar-rose bg-pink-50/30"
              />
            </div>

            <div>
              <label className="text-xs text-ahqar-text font-medium block mb-1">Email / Phone</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ayesha@example.com or +91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:border-ahqar-rose bg-pink-50/30"
              />
            </div>

            <div>
              <label className="text-xs text-ahqar-text font-medium block mb-1">Message / Inquiry</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us which Abaya or size you have in mind..."
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:border-ahqar-rose bg-pink-50/30"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-ahqar-rose to-ahqar-accent text-white font-medium text-xs uppercase tracking-widest shadow-pink-subtle hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-pink-100 text-xs text-ahqar-muted">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-ahqar-rose" />
            <span>WhatsApp: +91 (Bespoke Inquiry)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ahqar-rose" />
            <span>India Boutique House</span>
          </div>
        </div>
      </div>
    </div>
  );
};
