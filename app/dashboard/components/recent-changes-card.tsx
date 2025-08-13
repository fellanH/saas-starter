"use client";

import { Button } from "@/components/ui/button";
import { useDashboard } from "../context";
import { DashboardCard } from "./dashboard-card";
import { Clock } from "./icons";

type RecentChange = {
  date: string;
  summary: string;
  approvedBy: string;
};

export function RecentChangesCard({
  recentChanges,
}: {
  recentChanges: RecentChange[];
}) {
  const { userRole } = useDashboard();

  return (
    <DashboardCard
      title="Senaste Ändringar"
      description="Historik över godkända ändringar"
      icon={<Clock className="h-6 w-6 text-slate-600" />}>
      <div className="space-y-4">
        {recentChanges.map((change, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-slate-900">{change.summary}</p>
              <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                <span>{change.date}</span>
                {userRole === "board" && (
                  <span>Godkänd av: {change.approvedBy}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4 bg-transparent">
        Visa fullständig historik
      </Button>
    </DashboardCard>
  );
}
