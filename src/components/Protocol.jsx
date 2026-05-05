import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "1",
    title: "Kennismaking",
    desc: "Een vrijblijvend gesprek (videobellen of live) van 15-30 minuten om te voelen of er een wedezijdse klik is."
  },
  {
    num: "2",
    title: "Voorbereidende sessies",
    desc: "Drie sessies waarin we o.a. jullie wensen, het geboorteplan, angsten en praktische voorbereiding bespreken."
  },
  {
    num: "3",
    title: "Altijd Bereikbaar",
    desc: "Tussendoor altijd telefonisch of via whatsapp beschikbaar bij extra vragen of gewoon even sparren."
  },
  {
    num: "4",
    title: "On Call & Bevalling",
    desc: "Vanaf week 38 tot week 42 sta ik 24/7 voor jullie klaar. Ik kom wanneer jullie dit wensen en blijf tot de baby is geboren."
  },
  {
    num: "5",
    title: "Postpartum Bezoek",
    desc: "Twee bezoeken in de kraamperiode om terug te blikken op jullie geboorteverhaal en gezamenlijk af te sluiten."
  },
  {
    num: "6",
    title: "Extra's",
    desc: "Indien gewenst kan er een extra postpartum pakket worden afgesloten voor meer en langere begeleiding."
  }
];

export default function Protocol() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.protocol-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      });
    }, container.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={container} className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-primary uppercase tracking-widest text-sm font-bold">Het Traject</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-4">Wat kun je verwachten?</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0;
              return (
                <div key={i} className={`protocol-item relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${isEven ? 'md:pl-16 md:pr-0' : 'md:pr-16 md:pl-0 md:text-right'} pl-20 w-full`}>
                    <h3 className="text-2xl font-heading font-bold text-dark">{step.title}</h3>
                    <p className="text-dark/70 font-body mt-3 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  <div className="absolute left-0 md:relative md:left-auto w-12 h-12 bg-primary rounded-full z-10 flex items-center justify-center text-white text-xl font-bold shadow-md shrink-0 border-4 border-background">
                    {step.num}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
