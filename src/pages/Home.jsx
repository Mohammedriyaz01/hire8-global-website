import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import CurrentOpenings from "../components/CurrentOpenings";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <WhyChoose />
      <Process />
      <CurrentOpenings />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;