import Hero from "./components/Hero";
import Services from "./components/Services";
import UrgentBanner from "./components/UrgentBanner";
import WhoWeAre from "./components/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UrgentBanner />
      <WhoWeAre />
      <Services />
    </>
  );
}
