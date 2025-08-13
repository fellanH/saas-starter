"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, Search, Settings } from "lucide-react";
import { DashboardProvider, useDashboard } from "./context";

function DashboardHeader() {
  const { associationName, userRole, setUserRole } = useDashboard();

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-serif font-bold text-slate-900">
            {associationName}
          </h1>
          <Badge
            variant="outline"
            className="text-emerald-600 border-emerald-200">
            Stadgaronline.se
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input placeholder="Sök i stadgar..." className="pl-10 w-64" />
          </div>

          {/* Role Toggle (for demo) */}
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setUserRole(userRole === "board" ? "member" : "board")
            }
            className="text-xs">
            {userRole === "board" ? "Styrelsevy" : "Medlemsvy"}
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/stockholm-apartment-facade.png" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Inställningar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logga ut
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-slate-50">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
      </div>
    </DashboardProvider>
  );
}
