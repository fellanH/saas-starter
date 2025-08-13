import { CtaSection } from "./components/cta-section";
import { ForWhomSection } from "./components/for-whom-section";
import { HeroSection } from "./components/hero-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { IntroSection } from "./components/intro-section";
import { TrustSection } from "./components/trust-section";
import { CoreFeaturesSection } from "./components/core-features-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <TrustSection />
      <ForWhomSection />
      <CtaSection />
    </main>
  );
}
