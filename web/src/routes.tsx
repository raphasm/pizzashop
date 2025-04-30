import { createBrowserRouter } from "react-router-dom";

import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashboard";
import { AppLayout } from "./pages/layouts/app";
import { AuthLayout } from "./pages/layouts/auth";
import { SignUp } from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
