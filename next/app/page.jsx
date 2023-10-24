import {
  Services,
  Header,
  About,
  Projects,
  Partners,
  Contact,
  ParticlesComp,
} from "./components";

export default function Home() {
  return (
    <main className="relative bg-theme-dark text-base ">
      {/* <section
        className="h-full w-full absolute z-10"
        id="particles-js"
      ></section> */}
      <ParticlesComp />
      <Header />
      <Services />
      <About />
      <Projects />
      <Partners />
      <Contact />
    </main>
  );
}
