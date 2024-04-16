import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Prefooter from "@/components/footer/Prefooter";
import Hero from "@/components/hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Grantees from "@/components/Grantees/Grantees";
import Resources from "@/components/Resources/Resources";
import Partners from "@/components/Partners/Partners";

export default function Home() {
  return (
    <div className="container p-2.5 md:p-[30px] md:pt-2.5">
      <Header />
      <Hero />
      <main>
        <Partners />
        <About />
        <Projects />
        <Grantees />
        <Resources />
        <Prefooter />
      </main>
      <Footer />
    </div>
  );
}
