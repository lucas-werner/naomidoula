import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, container.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100dvh] overflow-hidden bg-dark flex flex-col justify-end">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center object-cover opacity-80"
        style={{ backgroundImage: "url('/hero-image.jpeg')" }}
      />
      {/* Heavy primary to black gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 flex flex-col items-start justify-end lg:w-3/4">
        <p className="hero-element font-data text-accent mb-4 tracking-widest text-sm uppercase font-semibold">Doula / Geboortecoach</p>
        
        <h1 className="hero-element flex flex-col font-heading font-bold text-background leading-none mb-8">
          <span className="text-5xl md:text-7xl lg:text-8xl mb-2 md:mb-4 tracking-tight">Vertrouwen in</span>
          <span className="font-drama italic text-5xl md:text-7xl lg:text-9xl text-accent opacity-90 pb-2">je bevalling,</span>
          <span className="text-3xl md:text-5xl lg:text-6xl mt-2 md:mt-4 tracking-tight">rust tijdens je zwangerschap.</span>
        </h1>
        
        <p className="hero-element font-body text-background/90 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
          Een zachte kracht aan je zijde. Continue emotionele en fysieke support, zodat jij je veilig voelt om geboorte te geven op jouw manier.
        </p>
        
        <a href="https://wa.me/31612947057" target="_blank" rel="noopener noreferrer" className="hero-element btn group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-background rounded-[3rem] font-heading font-bold text-lg overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-dark transition-colors duration-500">
            Kennismaken (15 min)
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </a>
      </div>
    </section>
  );
}
