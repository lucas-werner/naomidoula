import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31612947057"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat direct via WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 bg-whatsapp text-white font-body font-semibold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2.25} />
      <span className="whitespace-nowrap">Chat direct via WhatsApp</span>
    </a>
  );
}
