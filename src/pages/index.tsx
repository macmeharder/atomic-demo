import { Route } from "atomic-router-react";

import { DashboardPage } from "@demo/pages/dashboard";
import { LoginPage } from "@demo/pages/login";
import { routes } from "@demo/shared/routes";

export function Pages() {
  return (
    <>
      <Route route={routes.dashboard.default} view={DashboardPage} />
      <Route route={routes.login} view={LoginPage} />
    </>
  );
}

export const routesMap = [
  { path: "/dashboard", route: routes.dashboard.default },
  { path: "/dashboard/profile", route: routes.dashboard.profile },
  { path: "/login", route: routes.login },
];
