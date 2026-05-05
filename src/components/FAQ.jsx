import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Werk je ook als ik een medische indicatie heb?",
    answer: "Absoluut. Juist in een medische setting in het ziekenhuis kan een doula van grote waarde zijn om de rust te bewaken, uitleg te geven over procedures en te zorgen dat jouw stem gehoord blijft worden."
  },
  {
    question: "Wat als je ziek bent of al bij een bevalling bent?",
    answer: "Ik werk samen met een vaste back-up doula die dezelfde visie en werkwijze hanteert."
  },
  {
    question: "Reis je door heel Noord-Brabant?",
    answer: "Mijn werkgebied is voornamelijk rondom Oisterwijk, Tilburg, Den Bosch, Eindhoven en Breda (straal van ca. 45 min rijden). Woon je iets verder? Neem even contact op, dan kijken we naar de mogelijkheden."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-normal text-4xl md:text-5xl text-center text-primary mb-12">
          Veelgestelde Vragen
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white border border-primary/20 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-body text-xl text-primary">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 w-full">
                  <p className="font-body text-dark/80 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
