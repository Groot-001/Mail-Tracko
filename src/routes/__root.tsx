import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="flex gap-4 p-4 border-b">
        <Link to="/" className="hover:text-blue-600 [&.active]:font-bold">
          Home
        </Link>
        <Link
          to="/dashboard"
          className="hover:text-blue-600 [&.active]:font-bold"
        >
          Dashboard
        </Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
