import { Link } from "atomic-router-react";
import { routes } from "@demo/shared/routes";

export function ProfilePage() {
  return (
    <div>
      <h1>ProfilePage</h1>
      <Link to={routes.login}>Go to LoginPage</Link>
    </div>
  );
}
