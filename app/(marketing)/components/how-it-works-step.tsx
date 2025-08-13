import { LucideIcon } from "lucide-react";

type HowItWorksStepProps = {
  icon: LucideIcon;
  title: string;
};

export function HowItWorksStep({ icon: Icon, title }: HowItWorksStepProps) {
  return (
    <div>
      <Icon className="h-12 w-12 mx-auto text-orange-500 mb-4" />
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
  );
}
