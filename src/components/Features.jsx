import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { MousePointer2, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

const BenefitsCard = () => {
  const benefits = [
    "Minder medische interventies tijdens de bevalling",
    "Kortere duur van de bevalling",
    "Groter gevoel van controle en meer tevredenheid over de geboorte-ervaring bij de moeder",
    "Verminderde kans op een postnatale depressie",
  ];

  return (
    <div className="w-full mt-10">
      <h3 className="font-heading font-normal text-2xl text-primary mb-6">
        Bewezen voordelen van een doula:
      </h3>
      <ul className="flex flex-col gap-5">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 flex-shrink-0 text-accent mt-0.5" />
            <span className="font-body text-dark/80 text-lg leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Features() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-anim", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      });
    }, container.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={container} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="feature-anim w-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-4 border-white">
          <img src="/doula-image.jpeg" alt="Hands holding baby feet" className="w-full h-auto object-cover" />
        </div>
        
        <div className="flex flex-col">
          <h2 className="feature-anim font-heading font-bold text-4xl md:text-5xl text-dark mb-6">
            Wat doet een Doula?
          </h2>
          
          <p className="feature-anim font-drama italic text-primary text-xl md:text-2xl mb-6">
            “A female caregiver who mothered the mother”
          </p>

          <div className="feature-anim font-body text-dark/80 space-y-4 text-lg leading-relaxed">
            <p>
              Een doula is een betrokken en professionele geboortebegeleider en vertrouwenspersoon. Zij biedt doorlopende emotionele, mentale en praktische ondersteuning aan de zwangere vrouw en haar partner tijdens de zwangerschap, de bevalling en de kraamperiode.
            </p>
            <p>
              Waar de verloskundige zich richt op de medische zorg, ben ik er volledig voor jou en je partner. Ik blijf continu aanwezig en ben goed op de hoogte van jullie wensen en behoeften. Mijn doel is dat jij met een goed en krachtig gevoel terugkijkt op je geboorte-ervaring.
            </p>
          </div>

          <div className="feature-anim">
            <BenefitsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
