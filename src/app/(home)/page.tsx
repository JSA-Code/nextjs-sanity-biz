import Appointment from "./Appointment";
import Contact from "./Contact";
import Hero from "./Hero";
import Office from "./Office";
import Pricing from "./Pricing";
import Review from "./Review";
import Services from "./Services";

// TODO update entire page to utilize Sanity data
export default function Home() {
  return (
    <main className="px-5 xl:px-24 mt-6 md:mt-12">
      <Hero />
      <Appointment />
      <Contact />
      <Office />
      <Pricing />
      <Services />
      <Review />
    </main>
  );
}