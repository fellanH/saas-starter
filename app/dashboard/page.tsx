import {
  currentBylaws,
  pendingProposals,
  recentChanges,
  resources,
} from "@/app/dashboard/data";
import DashboardClient from "./components/dashboard-client";

export default function Dashboard() {
  // In a real application, you would fetch this data from an API
  const data = {
    currentBylaws,
    recentChanges,
    pendingProposals,
    resources,
  };

  return (
    <DashboardClient
      currentBylaws={data.currentBylaws}
      recentChanges={data.recentChanges}
      pendingProposals={data.pendingProposals}
      resources={data.resources}
    />
  );
}
