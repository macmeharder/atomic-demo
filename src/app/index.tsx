import { createHistoryRouter } from "atomic-router";
import { RouterProvider } from "atomic-router-react";
import { sample } from "effector";
import { createBrowserHistory } from "history";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Pages, routesMap } from "@demo/pages";
import { routes } from "@demo/shared/routes";

import "@demo/shared/styles/index.css";

export const router = createHistoryRouter({
  routes: routesMap,
});

export const history = createBrowserHistory();

router.setHistory(history);

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: routes.login.open,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  </StrictMode>
);
