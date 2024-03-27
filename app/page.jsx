'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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
  Footer
} from './_components';

const ParticlesComp = dynamic(
  () => import('./_components/head/ParticlesComp'),
  { ssr: false }
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      {isMounted && <ParticlesComp />}
    </main>
  );
}
