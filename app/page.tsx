import Hero from '@/components/Hero';
import Card from '@/components/Card';
import AccordionSection from '@/components/AccordionSection';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'Portfolio website build with next.js',
    href: 'https://github.com/devinepal/Week-2-project',
    tech: ['Next.js', 'React', 'CSS'],
  },
  {
    title: 'Simple Portfolio',
    description: 'A simple portfolio website wtih theme toggle feature built using React and CSS.',
    href: 'https://github.com/devinepal/week3',
    tech: ['React', 'Node.js'],
  },
  {
    title: 'learning next.js',
    description: 'A simple portfolio website wtih theme toggle, back to top feature built using React and CSS.',
    href: 'https://github.com/devinepal/devinepal.github.io',
    tech: ['React', 'Node.js'],
  },
  
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="projects" style={{ maxWidth: '960px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map(p => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </section>

      <AccordionSection />
    </>
  );
}
