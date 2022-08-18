import { Route } from "atomic-router-react";

import { ProfilePage } from "@demo/pages/profile";
import { NavbarLayout } from "@demo/shared/layouts";
import { routes } from "@demo/shared/routes";

export function DashboardPage() {
  return (
    <NavbarLayout>
      <Route route={routes.dashboard.profile} view={ProfilePage} />
    </NavbarLayout>
  );
}
