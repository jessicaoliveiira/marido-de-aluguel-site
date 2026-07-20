'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <h3 className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{question}</h3>
        <span className="flex-shrink-0 text-brand-blue">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-5 h-5" aria-hidden="true" />
          )}
        </span>
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
          className="px-5 pb-5 bg-white"
        >
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="faq-title" className="section-title">
            Perguntas Frequentes
          </h2>
          <p className="section-subtitle mx-auto">Tire suas dúvidas sobre nossos serviços hidráulicos</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <meta itemProp="name" content={faq.question} />
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <meta itemProp="text" content={faq.answer} />
              </div>
              <FAQItem question={faq.question} answer={faq.answer} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
