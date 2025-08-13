import { Button } from "@/components/ui/button";
import { DashboardCard } from "./dashboard-card";
import { BookOpen, Download, ExternalLink } from "./icons";

const iconMap = {
  "Ladda ner standardmall för stadgar": Download,
  "Guide: Vanliga fallgropar i stadgar": BookOpen,
  "Kontakta juridisk expert": ExternalLink,
};

export function ResourcesCard({
  resources,
}: {
  resources: { title: string }[];
}) {
  return (
    <DashboardCard
      title="Resurser & Juridisk Vägledning"
      description="Användbara verktyg och mallar"
      icon={<BookOpen className="h-6 w-6 text-blue-600" />}>
      <div className="space-y-3">
        {resources.map((resource, index) => {
          const Icon =
            iconMap[resource.title as keyof typeof iconMap] || BookOpen;
          return (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-auto p-3 text-left hover:bg-blue-50">
              <Icon className="mr-3 h-4 w-4 text-blue-600 flex-shrink-0" />
              <span className="text-sm">{resource.title}</span>
            </Button>
          );
        })}
      </div>
    </DashboardCard>
  );
}
