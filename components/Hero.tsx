
// ============================================================
// FILE: components/Hero.tsx  (Server Component)
// ============================================================
export default function Hero() {
  return (
    <section style={{
      padding: '5rem 2rem 3rem',
      textAlign: 'center',
      maxWidth: '720px',
      margin: '0 auto',
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
        Hi, I&apos;m Devi 👋
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--muted)', lineHeight: 1.7 }}>
        Full-stack developer building thoughtful, accessible web experiences.
        Open to graduate roles in 2025.
      </p>
      <a
        href="/week3/contact"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          padding: '0.75rem 2rem',
          background: 'var(--accent)',
          color: '#fff',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Get in touch →
      </a>
    </section>
  );
}
