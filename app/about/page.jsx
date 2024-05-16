import {
    Header,
    Nav,
    AboutInfo,
    Contact,
    Footer,
    ParticlesComp
  } from '../_components';
  
  export default function About() {
    return (
      <main className="relative bg-theme-primary text-base">
          <Nav />
          <Header />
          <AboutInfo /> 
          <Contact />
          <Footer />
          <ParticlesComp />
      </main>
    );
  }
  