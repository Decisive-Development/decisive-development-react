import {
  Header,
  Nav,
  Journey,
  Pricing,
  Projects,
  ContactBlock,
  Footer,
  ParticlesComp
} from './_components';

export default function Home() {
  return (
    <main className="relative bg-theme-primary text-base">
        <Nav />
        <Header />
        <Journey />
        <Projects />
        <Pricing />
        <ContactBlock />
        <Footer />
        <ParticlesComp />
    </main>
  );
}
