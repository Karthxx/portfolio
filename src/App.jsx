import Navbar from "./Navbar";
import Hero from "./Hero";
import Specialisation from "./Specialisation";

export default function App() {
  return (
    <main>
      <section className="px-3 md:px-8">
        <Navbar />
      </section>
      <section className="md:h-screen px-4 py-4 md:px-8 md:py-10 flex justify-center">
        <Hero />
      </section>
      <section className=" px-4 py-4 md:px-8 md:py-10 flex justify-center">
        <Specialisation />
      </section>
    </main>
  );
}
