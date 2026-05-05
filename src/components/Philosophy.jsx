import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const container = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.philo-word', {
        y: 40,
        opacity: 0,
        rotationX: -45,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philo-trigger',
          start: 'top 75%',
        }
      });
      
      gsap.from('.philo-anim', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.philo-trigger',
          start: 'top 85%'
        }
      });
    }, container.current);
    return () => ctx.revert();
  }, []);

  const statement = "Moon&Bloom";
  const words = statement.split(" ");

  return (
    <section id="philosophy" ref={container} className="relative w-full py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-5/12 philo-anim">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-[2rem]"></div>
            <img src="/portrait-image.jpeg" alt="Portret van Naomi de Jong" className="relative rounded-[2rem] shadow-lg w-full h-auto" />
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <p className="philo-trigger font-heading text-dark text-4xl md:text-5xl font-bold leading-tight mb-8">
            Even voorstellen:<br/>
            <span className="font-drama italic text-primary font-normal mt-2 inline-block perspective-[1000px]">
              {words.map((word, i) => (
                <span key={i} className="philo-word inline-block mr-3 md:mr-5 transform-style-3d">
                  {word}
                </span>
              ))}
            </span>
          </p>

          <div className="space-y-6 font-body text-dark/80 text-lg leading-relaxed philo-anim">
            <p>
              Mijn naam is Naomi, ik ben 32 jaar en woon samen met mijn uit Brazilië afkomstige partner en ons dochtertje Luna (2) in het mooie Oisterwijk, in Brabant. Momenteel ben ik in verwachting van ons tweede wondertje. Daarnaast houd ik enorm van de natuur, koken en creatief bezig zijn. Ook kan ik erg genieten van een avondje heerlijk dansen &mdash; al is dat inmiddels alweer even geleden.
            </p>
            <p>
              Ik ben sterk geïnteresseerd in een zo low-tox mogelijke levensstijl en blijf me hierin ontwikkelen, al geloof ik ook heel erg in balans. Daar hoort voor mij af en toe bewust een minder gezonde keuze en lekker genieten bij. Daarnaast ben ik bekend met hoogsensitiviteit.
            </p>
            <p>
              Al zolang ik me kan herinneren ben ik dol op baby’s en kinderen. Ook zwangere vrouwen en verhalen over geboortes vond ik altijd fascinerend; er ging voor mij iets magisch van uit. Tijdens mijn opleiding pedagogiek ben ik mijn interesse voor kind en gezin verder gaan volgen en momenteel werk ik als intensief gezinsbehandelaar bij een grote jeugdzorgorganisatie. Hoewel ik veel passie heb voor mijn vak, merkte ik de afgelopen jaren dat ik toe was aan verandering en zoekende werd binnen het werken in de bekende jeugdzorgproblematiek. Sinds mijn eigen zwangerschap en de geboorte van onze oudste dochter Luna groeiden mijn verwondering en enthousiasme voor het volledige geboorteproces alleen maar verder. Zo kwam ook het begrip ‘doula’ op mijn pad, gevolgd door de opleiding tot doula. Ik wist vrijwel meteen: dit is wat ik wil gaan doen.
            </p>
            <p>
              Ik geloof niet in one size fits all. Ik geloof in autonomie, in het maken van geïnformeerde keuzes en in de oerkracht van het vrouwenlichaam. Tegelijkertijd ben ik ook nuchter: een geboorte laat zich niet plannen, maar je kunt je wél voorbereiden op wat komen gaat en op hoe je met de golven meebeweegt.
            </p>
            <p className="font-semibold text-primary">
              Mijn aanpak is rustig, warm en zonder oordeel. Of je nu kiest voor een thuisbevalling in bad of een ziekenhuisbevalling met pijnbestrijding, ik sta naast je.
            </p>
            <div className="mt-16">
              <h3 className="font-heading font-bold text-3xl text-primary mb-6">
                Opleidingen
              </h3>
              <ul className="space-y-3 font-body text-dark/80 text-lg mb-12">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 tracking-widest">✓</span> 
                  <span><strong>HBO Pedagogiek</strong> Fontys Tilburg - 2017</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 tracking-widest">✓</span> 
                  <span><strong>Soos Academy</strong> voor doula's oktober 2025 - heden</span>
                </li>
              </ul>
              
              <h3 className="font-heading font-bold text-3xl text-primary mb-6">
                Moon & Bloom
              </h3>
              <div className="space-y-5 font-body text-dark/80 leading-relaxed text-lg">
                <p>
                  De naam van mijn doulapraktijk, <strong>Moon&Bloom</strong>, volgde al snel. Ik wist direct dat ik hier iets met de maan in wilde verwerken, geïnspireerd door de naam van onze dochter Luna &mdash; zij is immers de aanleiding geweest tot dit alles.
                </p>
                <p>
                  <strong>Moon</strong> staat symbool voor mijn geboorte als moeder en voor hoe intens, krachtig en bijzonder het zwanger zijn, de bevalling en het moederschap voor mij zijn (geweest). Daarnaast is de maan een magisch en krachtig fenomeen: onmisbaar voor het leven op aarde, verantwoordelijk voor eb en vloed en daarmee ook voor de golven &mdash; een prachtige metafoor voor de weeën die komen en gaan. Deze dubbele betekenis maakte de naam voor mij extra passend.
                </p>
                <p>
                  <strong>Bloom</strong> staat voor bloei: de bloei van nieuw leven én de bloei die plaatsvindt tijdens de geboorte en de transformatie tot moeder. Want een levensveranderende transformatie, dát is het.
                </p>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="font-drama italic text-2xl text-primary leading-snug">
                    "Moon&Bloom verwijst naar de cyclus van de maan en de bloei van nieuw leven en staat voor vrouwelijkheid, intuïtie, zachtheid, geborgenheid én kracht" 🌙✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
