import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${scrolled ? 'w-[90%] max-w-5xl rounded-[2rem] glass-nav py-3 px-6 shadow-lg' : 'w-[90%] max-w-5xl bg-transparent py-4 px-2'}`}>
      <div className="flex items-center justify-between">
        <div className={`font-heading font-bold text-xl tracking-tight transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-background'}`}>
          Moon & Bloom
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className={`flex gap-6 font-heading font-semibold text-sm tracking-wide transition-colors duration-500 ${scrolled ? 'text-dark' : 'text-background/90'}`}>
            <a href="#features" className="hover:-translate-y-[1px] transition-transform">Wat doet een doula?</a>
            <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Werkwijze</a>
            <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform">Even Voorstellen</a>
            <a href="#pricing" className="hover:-translate-y-[1px] transition-transform">Stagetraject & Contact</a>
          </nav>
          <a href="https://wa.me/31612947057" target="_blank" rel="noopener noreferrer" className={`btn relative overflow-hidden px-6 py-2.5 rounded-[2rem] font-heading font-semibold text-sm transition-all duration-300 ${scrolled ? 'bg-accent text-dark hover:bg-opacity-90' : 'bg-background text-primary hover:bg-opacity-90'}`}>
            <span className="relative z-10">Kennismaken</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-current" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-primary' : 'text-background'} /> : <Menu className={scrolled ? 'text-primary' : 'text-background'} />}
        </button>
      </div>
      
      {/* Mobile Menu (simplified) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-background/95 backdrop-blur-xl rounded-[2rem] p-4 flex flex-col gap-4 shadow-xl border border-primary/10">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-dark font-heading font-semibold p-2">Wat doet een doula?</a>
          <a href="#protocol" onClick={() => setIsOpen(false)} className="text-dark font-heading font-semibold p-2">Werkwijze</a>
          <a href="#philosophy" onClick={() => setIsOpen(false)} className="text-dark font-heading font-semibold p-2">Even Voorstellen</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-dark font-heading font-semibold p-2">Stagetraject & Contact</a>
          <a href="https://wa.me/31612947057" target="_blank" rel="noopener noreferrer" className="bg-accent text-dark text-center rounded-[2rem] py-3 mt-2 font-heading font-semibold block">Kennismaken</a>
        </div>
      )}
    </div>
  );
}
