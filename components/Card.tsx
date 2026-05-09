// ============================================================
// FILE: components/Card.tsx  (Server Component — reusable with props)
// ============================================================
"use client"
type CardProps = {
  title: string;
  description: string;
  href?: string;
  tech?: string[];
};

export default function Card({ title, description, href, tech = [] }: CardProps) {
  return (
    <article style={{
      border: '1px solid var(--border)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      background: 'var(--card-bg)',
    }}>
      <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>{description}</p>

      {tech.length > 0 && (
        <ul style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0 }}>
          {tech.map(t => (
            <li key={t} style={{
              fontSize: '0.75rem',
              background: 'var(--tag-bg)',
              borderRadius: '1rem',
              padding: '0.2rem 0.6rem',
              color: 'var(--accent)',
              fontWeight: 600,
            }}>
              {t}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}
        >
          View project →
        </a>
      )}
    </article>
  );
}

import { useState } from "react";

