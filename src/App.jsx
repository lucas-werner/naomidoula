import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Protocol from './components/Protocol';
import Philosophy from './components/Philosophy';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Add noise overlay to body dynamically or we already have it in index.css
    // Let's ensure smooth scrolling
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative text-dark bg-background selection:bg-accent selection:text-white">
      <svg className="noise-overlay" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>

      <Navbar />
      <Hero />
      <Features />
      <Protocol />
      <Philosophy />
      <FAQ />
      <Pricing />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
