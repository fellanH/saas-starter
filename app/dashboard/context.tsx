"use client";

import { createContext, useContext, useState } from "react";

type UserRole = "board" | "member";

interface DashboardContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  associationName: string;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>("board");
  const associationName = "Brf Eken";

  return (
    <DashboardContext.Provider
      value={{ userRole, setUserRole, associationName }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
