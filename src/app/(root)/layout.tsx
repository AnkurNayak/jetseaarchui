import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: BaseLayoutProps) {
  return <>{children}</>;
}
