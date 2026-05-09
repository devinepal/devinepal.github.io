
// ============================================================
// FILE: components/AccordionSection.tsx  (Client Component — owns openIndex)
// ============================================================
"use client";

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What technologies do you specialise in?',
    answer: 'I work primarily with TypeScript, React, Next.js, and Node.js. I also have experience with PostgreSQL, Prisma, and REST/GraphQL APIs.',
  },
  {
    question: 'Are you available for freelance projects?',
    answer: 'Yes! I take on select freelance projects alongside my studies. Reach out via the contact page and let me know your timeline and scope.',
  },
  {
    question: 'What does your development process look like?',
    answer: 'Discovery → wireframe → build → review → ship. I communicate progress daily and always deliver a staging preview before final handoff.',
  },
  {
    question: 'How do I get in touch?',
    answer: 'Use the contact form on this site, or email me directly at jane@example.com. I usually reply within 24 hours.',
  },
];

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <section id="faq" style={{ maxWidth: '720px', margin: '4rem auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>

      <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              <dt>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '1rem 1.25rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text)',
                  }}
                >
                  {item.question}
                  <span aria-hidden="true" style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▾
                  </span>
                </button>
              </dt>

              {isOpen && (
                <dd style={{
                  margin: 0,
                  padding: '0 1.25rem 1rem',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.75rem',
                }}>
                  {item.answer}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}

