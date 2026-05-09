import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Devi Nepal — Developer',
  description: 'Personal portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <BackToTop/>
        <Footer />
      </body>
    </html>
  );
}
