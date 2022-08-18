import { Link } from "atomic-router-react";
import { routes } from "@demo/shared/routes";

export function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <Link to={routes.dashboard.profile}>Go to ProfilePage</Link>
    </div>
  );
}
