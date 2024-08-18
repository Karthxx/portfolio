import Navbar from "./Navbar";
import Hero from "./Hero";
import Specialisation from "./Specialisation";
import Projects from "./Projects";

export default function App() {
  return (
    <main>
      <section className="px-1 md:px-8">
        <Navbar />
      </section>
      <section className="md:h-screen px-4 py-4 md:px-8 md:py-10 flex justify-center">
        <Hero />
      </section>
      <section className=" px-4 py-4 md:px-8 md:py-10 flex justify-center">
        <Specialisation />
      </section>
      <section className=" px-4 py-4 md:px-8 md:py-10 flex justify-center">
        <Projects />
      </section>
    </main>
  );
}
