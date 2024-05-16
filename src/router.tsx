import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboards";
import { Orders } from "./pages/app/orders/orders";
import { SignIn } from "./pages/auth/sing-in";
import { SignUp } from "./pages/auth/sing-up";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },

    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sing-in", element: <SignIn /> },
      { path: "/sing-up", element: <SignUp /> }
    ],
  }


  //{ path: "/", element: <Dashboard /> },
  //{ path: "/sing-in", element: <SignIn /> }
]);
