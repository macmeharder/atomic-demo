import { Link } from "atomic-router-react";
import { ReactNode } from "react";

import { routes } from "@demo/shared/routes";

export function NavbarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col gap-4">
      <div className="flex gap-2 border-b-2 border-gray-300">
        <Link to={routes.dashboard.profile}>ProfilePage</Link>
        <Link to={routes.login}>LoginPage</Link>
      </div>
      {children}
    </div>
  );
}
