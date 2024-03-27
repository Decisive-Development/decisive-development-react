import dynamic from 'next/dynamic';
import {
  Nav,
  Header,
  Journey,
  Pricing,
  Services,
  About,
  Projects,
  Partners,
  Contact,
  Footer
} from './_components';

const ParticlesComp = dynamic(() => import('./_components/head/ParticlesComp'));

export default function Home() {
  return (
    <main className="relative bg-theme-primary text-base">
      <ParticlesComp />
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
    </main>
  );
}
