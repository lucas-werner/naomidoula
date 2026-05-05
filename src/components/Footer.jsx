import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-background rounded-t-[4rem] px-6 py-20 mt-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-background/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-background mb-4">Moon & Bloom</h2>
            <p className="font-body text-background/60 max-w-sm mb-8">
              Vertrouwen in je bevalling, rust tijdens je zwangerschap.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-data text-sm text-background font-bold uppercase tracking-widest mb-2">Navigatie</h4>
          <a href="#" className="font-body text-background/80 hover:text-white transition-colors">Home</a>
          <a href="#features" className="font-body text-background/80 hover:text-white transition-colors">Wat doet een doula?</a>
          <a href="#protocol" className="font-body text-background/80 hover:text-white transition-colors">Werkwijze</a>
          <a href="#philosophy" className="font-body text-background/80 hover:text-white transition-colors">Even Voorstellen</a>
          <a href="#pricing" className="font-body text-background/80 hover:text-white transition-colors">Stagetraject & Contact</a>
        </div>

        {/* Legal / Social */}
        <div className="flex flex-col gap-4">
          <h4 className="font-data text-sm text-background font-bold uppercase tracking-widest mb-2">Contact</h4>
          <span className="font-body text-background/80">Naomi de Jong</span>
          <span className="font-body text-background/80">Oisterwijk, Nederland</span>
          <a href="mailto:info@moonandbloom.nl" className="font-body text-background/80 hover:text-white transition-colors">info@moonandbloom.nl</a>
          <a href="https://wa.me/31612947057" target="_blank" rel="noopener noreferrer" className="font-body text-background/80 hover:text-white transition-colors">WhatsApp</a>
          <a href="https://www.instagram.com/moonandbloomdoula/" target="_blank" rel="noopener noreferrer" className="font-body text-background/80 hover:text-white transition-colors">Instagram</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-data text-xs text-background/40">
          © {new Date().getFullYear()} Moon & Bloom. All rights reserved.
        </p>
        <p className="font-data text-xs text-background/40">
          KvK: 12345678
        </p>
      </div>
    </footer>
  );
}
