// ============================================================
// FILE: components/Header.tsx  (Client Component — owns theme)
// ============================================================
"use client";

import { useState, useEffect } from 'react';
import Nav from './Navbar';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  // On mount, read saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  // Whenever isDark changes, persist it and update <html> class
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      color: 'var(--text)',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>Devi Nepal</span>

      <Nav />

      <button
        onClick={() => setIsDark(!isDark)}
        aria-pressed={isDark}
        aria-label="Toggle theme"
        style={{
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: '2rem',
          padding: '0.4rem 0.9rem',
          cursor: 'pointer',
          fontSize: '1rem',
          color: 'var(--text)',
        }}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}