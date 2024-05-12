import {
  Header,
  Nav,
  Journey,
  Pricing,
  Services,
  About,
  Projects,
  Partners,
  Contact,
  Footer,
  ParticlesComp
} from './_components';

export default function Home() {
  return (
    <main className="relative bg-theme-primary text-base">
      <Nav />
      <Header />
      <Journey />
      <Pricing />
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Partners /> */}
      <Contact />
      <Footer />
      {/* <ParticlesComp /> */}
    </main>
  );
}
