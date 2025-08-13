"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDashboard } from "../context";
import { DashboardCard } from "./dashboard-card";
import { AlertCircle, MessageSquare } from "./icons";

type Proposal = {
  id: number;
  title: string;
  submittedBy: string;
  status: string;
  date: string;
};

export function ProposalsCard({
  pendingProposals,
}: {
  pendingProposals: Proposal[];
}) {
  const { userRole } = useDashboard();

  if (userRole !== "board") {
    return null;
  }

  return (
    <DashboardCard
      title="Förslag att Hantera"
      description="Inga nya förslag att hantera."
      icon={<AlertCircle className="h-6 w-6 text-amber-600" />}>
      {pendingProposals.length > 0 ? (
        <div className="space-y-4">
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-900">
              {pendingProposals.length} nya förslag
            </p>
          </div>

          <div className="space-y-3">
            {pendingProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex flex-col items-start justify-between gap-2">
                  <Badge
                    variant={
                      proposal.status === "Nytt" ? "default" : "secondary"
                    }
                    className="text-xs">
                    {proposal.status}
                  </Badge>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900">
                      {proposal.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      av {proposal.submittedBy} • {proposal.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Visa alla förslag
          </Button>
        </div>
      ) : (
        <div className="text-center py-8">
          <MessageSquare className="h-12 w-12 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600">Inga nya förslag att hantera.</p>
          <p className="text-sm text-slate-500 mt-1">Bra jobbat!</p>
        </div>
      )}
    </DashboardCard>
  );
}
