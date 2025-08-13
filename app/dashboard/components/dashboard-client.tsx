"use client";

import { useDashboard } from "../context";
import { CurrentBylawsCard } from "./current-bylaws-card";
import { ProposalsCard } from "./proposals-card";
import { QuickStatsCard } from "./quick-stats-card";
import { RecentChangesCard } from "./recent-changes-card";
import { ResourcesCard } from "./resources-card";

type DashboardClientProps = {
  currentBylaws: {
    name: string;
    lastUpdated: string;
    version: string;
  };
  recentChanges: {
    date: string;
    summary: string;
    approvedBy: string;
  }[];
  pendingProposals: {
    id: number;
    title: string;
    submittedBy: string;
    status: string;
    date: string;
  }[];
  resources: {
    title: string;
  }[];
};

export default function DashboardClient({
  currentBylaws,
  recentChanges,
  pendingProposals,
  resources,
}: DashboardClientProps) {
  const { userRole } = useDashboard();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Main Cards */}
      <div className="lg:col-span-2 space-y-8">
        <CurrentBylawsCard
          name={currentBylaws.name}
          lastUpdated={currentBylaws.lastUpdated}
          version={currentBylaws.version}
        />
        <RecentChangesCard recentChanges={recentChanges} />
      </div>

      {/* Right Column - Sidebar Cards */}
      <div className="space-y-8">
        {userRole === "board" && (
          <ProposalsCard pendingProposals={pendingProposals} />
        )}
        <ResourcesCard resources={resources} />
        <QuickStatsCard
          version={currentBylaws.version}
          pendingProposalsCount={pendingProposals.length}
        />
      </div>
    </div>
  );
}
