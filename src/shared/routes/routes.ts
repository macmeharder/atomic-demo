import { createRoute } from "atomic-router";

export const routes = {
  dashboard: {
    profile: createRoute(),
    default: createRoute(),
  },
  login: createRoute(),
};
