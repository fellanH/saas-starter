"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDashboard } from "../context";
import { DashboardCard } from "./dashboard-card";
import { CheckCircle, Edit3, FileText, Send } from "./icons";

export function CurrentBylawsCard({
  name,
  lastUpdated,
  version,
}: {
  name: string;
  lastUpdated: string;
  version: string;
}) {
  const [isProposalDialogOpen, setIsProposalDialogOpen] = useState(false);
  const { userRole } = useDashboard();

  return (
    <DashboardCard
      title="Gällande Stadgar"
      description="Aktuell version av föreningens stadgar"
      icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}>
      <div className="space-y-4">
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-900">{name}</h3>
          <p className="text-sm text-emerald-700 mt-1">
            Senast uppdaterad: {lastUpdated} • {version}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <FileText className="mr-2 h-4 w-4" />
            Läs Stadgar
          </Button>

          <Dialog
            open={isProposalDialogOpen}
            onOpenChange={setIsProposalDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Send className="mr-2 h-4 w-4" />
                Skicka Ändringsförslag
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Skicka Ändringsförslag</DialogTitle>
                <DialogDescription>
                  Föreslå ändringar i stadgarna som styrelsen kan granska.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="paragraph">Paragraf som berörs</Label>
                  <Input id="paragraph" placeholder="t.ex. §14" />
                </div>
                <div>
                  <Label htmlFor="proposal">Ditt förslag</Label>
                  <Textarea
                    id="proposal"
                    placeholder="Beskriv din föreslagna ändring..."
                  />
                </div>
                <div>
                  <Label htmlFor="motivation">Motivering</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Varför är denna ändring viktig?"
                  />
                </div>
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => setIsProposalDialogOpen(false)}>
                  Skicka in förslag
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {userRole === "board" && (
            <Button variant="outline">
              <Edit3 className="mr-2 h-4 w-4" />
              Hantera Stadgar
            </Button>
          )}
        </div>
      </div>
    </DashboardCard>
  );
}
