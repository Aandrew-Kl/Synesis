import Biography from "./components/Biography";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Biography />
      <Services />
    </>
  );
}
