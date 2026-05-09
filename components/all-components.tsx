
// ============================================================
// FILE: components/ContactForm.tsx  (Client Component — controlled form)
// ============================================================
"use client";

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }
    if (!form.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    // In production you would POST to an API route here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        padding: '2rem',
        borderRadius: '0.75rem',
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '1.5rem' }}>✅</p>
        <p style={{ fontWeight: 600 }}>Thanks, {form.name}! I'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '560px', margin: '0 auto' }}>
      {error && (
        <p role="alert" style={{ color: 'crimson', fontWeight: 600 }}>{error}</p>
      )}

      <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontWeight: 600 }}>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontWeight: 600 }}>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontWeight: 600 }}>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project..."
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </label>

      <button
        onClick={handleSubmit}
        style={{
          padding: '0.75rem 2rem',
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Send message
      </button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '0.6rem 0.875rem',
  borderRadius: '0.4rem',
  border: '1px solid var(--border)',
  background: 'var(--input-bg)',
  color: 'var(--text)',
  fontSize: '1rem',
  fontFamily: 'inherit',
};


// ============================================================
// FILE: app/layout.tsx
// ============================================================
// import type { Metadata } from 'next';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import './globals.css';
//
// export const metadata: Metadata = {
//   title: 'Jane Doe — Developer',
//   description: 'Personal portfolio',
// };
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// ============================================================
// FILE: app/page.tsx  (Home page — Server Component)
// ============================================================
// import Hero from '@/components/Hero';
// import Card from '@/components/Card';
// import AccordionSection from '@/components/AccordionSection';
//
// const projects = [
//   {
//     title: 'StudyBuddy',
//     description: 'A real-time collaborative note-taking app built with Next.js and Socket.io.',
//     href: 'https://github.com/janedoe/studybuddy',
//     tech: ['Next.js', 'Socket.io', 'Prisma'],
//   },
//   {
//     title: 'BudgetFlow',
//     description: 'Personal finance tracker with CSV import, charts, and recurring expenses.',
//     href: 'https://github.com/janedoe/budgetflow',
//     tech: ['React', 'Node.js', 'PostgreSQL'],
//   },
//   {
//     title: 'PawFinder',
//     description: 'Pet adoption matching app using the Petfinder API with server-side rendering.',
//     href: 'https://github.com/janedoe/pawfinder',
//     tech: ['Next.js', 'REST API', 'Tailwind'],
//   },
// ];
//
// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//
//       <section id="projects" style={{ maxWidth: '960px', margin: '4rem auto', padding: '0 2rem' }}>
//         <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>Projects</h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
//           {projects.map(p => (
//             <Card key={p.title} {...p} />
//           ))}
//         </div>
//       </section>
//
//       <AccordionSection />
//     </>
//   );
// }


// ============================================================
// FILE: app/contact/page.tsx
// ============================================================
// import ContactForm from '@/components/ContactForm';
//
// export default function ContactPage() {
//   return (
//     <section style={{ maxWidth: '640px', margin: '4rem auto', padding: '0 2rem' }}>
//       <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Get in touch</h1>
//       <ContactForm />
//     </section>
//   );
// }


// ============================================================
// FILE: app/globals.css  (CSS variables for theming)
// ============================================================
// :root {
//   --bg: #ffffff;
//   --text: #111111;
//   --muted: #555555;
//   --border: #e2e2e2;
//   --accent: #2563eb;
//   --card-bg: #f9f9f9;
//   --input-bg: #ffffff;
//   --tag-bg: #eff6ff;
// }

// html.dark {
//   --bg: #0f0f0f;
//   --text: #f0f0f0;
//   --muted: #999999;
//   --border: #2a2a2a;
//   --accent: #60a5fa;
//   --card-bg: #1a1a1a;
//   --input-bg: #1a1a1a;
//   --tag-bg: #1e3a5f;
// }

// * { box-sizing: border-box; }
// body { background: var(--bg); color: var(--text); font-family: system-ui, sans-serif; margin: 0; }
// a { color: var(--accent); }
