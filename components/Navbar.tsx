// ============================================================
// FILE: components/Nav.tsx  (Server Component — no "use client")
// ============================================================
import Link from 'next/link';

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#projects">Projects</Link></li>
        <li><Link href="/#faq">FAQ</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
