import "./globals.css";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
export const metadata = {
  title: "Week 3 Assignment",
  description: "Interactive Next.js Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}