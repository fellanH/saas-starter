"use client";

import { Home, Tag, LayoutDashboard, LogIn, UserPlus } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { name: "Hem", url: "/", icon: Home },
    { name: "Pris", url: "/pricing", icon: Tag },
    { name: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { name: "Logga in", url: "/sign-in", icon: LogIn },
    { name: "Skapa konto", url: "/sign-up", icon: UserPlus },
  ];
  return (
    <section className="flex flex-col min-h-screen">
      <NavBar items={navItems} />
      {children}
    </section>
  );
}
