import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Prefooter from "@/components/footer/Prefooter";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/Projects/Projects";
import Grantees from "@/components/Grantees/Grantees";
import Partners from "@/components/Partners/Partners";
import Manifesto from "@/components/Manifesto/Manifesto";

export default function Home() {
  return (
    <div className="container p-2.5 md:p-[30px] md:pt-2.5">
      <Header />
      <Hero />
      <main>
        <Partners />
        <Manifesto />
        <Projects />
        <Grantees />
        <Prefooter />
      </main>
      <Footer />
    </div>
  );
}
