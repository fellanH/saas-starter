import { howItWorksContent } from "../content";
import { HowItWorksStep } from "./how-it-works-step";

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            {howItWorksContent.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {howItWorksContent.steps.map((step, index) => (
            <HowItWorksStep key={index} icon={step.icon} title={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
