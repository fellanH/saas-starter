"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboard } from "../context";
import { Bell, FileText, Users } from "./icons";

export function QuickStatsCard({
  version,
  pendingProposalsCount,
}: {
  version: string;
  pendingProposalsCount: number;
}) {
  const { userRole } = useDashboard();
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="font-serif text-lg">Snabb Översikt</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-600">Aktiva medlemmar</span>
            </div>
            <span className="font-semibold">127</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-600">Stadgar version</span>
            </div>
            <span className="font-semibold">{version}</span>
          </div>

          {userRole === "board" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-slate-600" />
                <span className="text-sm text-slate-600">Väntande förslag</span>
              </div>
              <span className="font-semibold">{pendingProposalsCount}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
