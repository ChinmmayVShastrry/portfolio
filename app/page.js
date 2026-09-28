import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyHireMe from "@/components/WhyHireMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BeyondWork from "@/components/BeyondWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* The whole site is a single page composed of section components.
   Each component reads its content from data/content.js.
   Work comes straight after the hero: it's what most visitors came for. */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <WhyHireMe />
        <Skills />
        <Experience />
        <BeyondWork />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
