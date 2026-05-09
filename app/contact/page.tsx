import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section style={{ maxWidth: '640px', margin: '4rem auto', padding: '0 2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Get in touch</h1>
      <ContactForm />
    </section>
  );
}