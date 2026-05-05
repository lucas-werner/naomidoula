import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-40 bg-background px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Internship Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-10">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4 flex items-center gap-3">
              <span className="text-secondary">✧</span> Doula Stagetraject
            </h2>
            <p className="font-body text-lg text-dark/70 leading-relaxed">
              Omdat ik in opleiding ben tot Doula bij de Soos Academy, begeleid ik momenteel doula-stagetrajecten tegen een speciaal gereduceerd tarief. Ik bied jou volledige toewijding en begeleiding, precies zoals een gediplomeerde doula dat zou doen.
            </p>
          </div>

          <div className="bg-primary text-background p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
            <h3 className="font-heading font-bold text-3xl mb-2 text-white">Jouw Investering</h3>
            <p className="font-data text-sm h-8 mb-8 text-background/80 tracking-widest uppercase">
              Gereduceerd Tarief
            </p>
            
            <ul className="flex flex-col gap-4 mb-4">
              {[
                "Kennismaking (gratis & vrijblijvend)",
                "3 Voorbereidende sessies",
                "24/7 On-Call (vanaf week 38 tot 42)",
                "Continue aanwezigheid tijdens de bevalling",
                "2 Postpartum bezoeken"
              ].map((feat, j) => (
                <li key={j} className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-accent" />
                  <span className="font-body text-lg opacity-90">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 bg-[#2D3F37] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-primary/20 relative">
          <h2 className="font-heading font-bold text-3xl text-white mb-2">Neem Contact Op</h2>
          <p className="font-body text-background/70 mb-8">
            Heb je interesse in het stagetraject of wil je een vrijblijvende kennismaking inplannen? Vul het formulier in.
          </p>

          {/* Contact Form */}
          <form 
            action="https://formspree.io/f/mpqynlvj" 
            method="POST" 
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-data text-xs text-white uppercase tracking-wider">Naam</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="bg-background/5 border border-primary/30 rounded-xl px-4 py-3 text-background focus:outline-none focus:border-accent transition-colors"
                placeholder="Jouw naam"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-data text-xs text-white uppercase tracking-wider">E-mailadres</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="bg-background/5 border border-primary/30 rounded-xl px-4 py-3 text-background focus:outline-none focus:border-accent transition-colors"
                placeholder="jouw@email.nl"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-data text-xs text-white uppercase tracking-wider">Bericht</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="bg-background/5 border border-primary/30 rounded-xl px-4 py-3 text-background resize-none focus:outline-none focus:border-accent transition-colors"
                placeholder="Waarmee kan ik je helpen?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-accent text-background font-heading font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-accent/30 text-lg"
            >
              Verstuur Bericht
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
