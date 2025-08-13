import { HeroGeometric } from "@/components/ui/hero-geometric";
import { heroContent } from "../content";

export function HeroSection() {
  return (
    <section>
      <HeroGeometric
        badge={heroContent.badge}
        title1={heroContent.title1}
        title2={heroContent.title2}
        description={heroContent.description}
        image={heroContent.image}
      />
    </section>
  );
}
