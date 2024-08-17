import Navbar from "./Navbar";
import Hero from "./Hero";
import Specialisation from "./Specialisation";

export default function App() {
  return (
    <main>
      <section className="px-8">
        <Navbar />
      </section>
      <section className="h-screen px-8 py-10 flex justify-center">
        <Hero />
      </section>
      <section className=" px-8 py-10 flex justify-center">
        <Specialisation />
      </section>
    </main>
  );
}
