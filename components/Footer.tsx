
// ============================================================
// FILE: components/Footer.tsx  (Server Component)
// ============================================================
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      fontSize: '0.875rem',
      color: 'var(--muted)',
    }}>
      <p>© {year} Dev Nepal · Built with Next.js &amp; React</p>
    </footer>
  );
}
