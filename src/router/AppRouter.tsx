import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Lab from "../pages/Lab";
import Projects from "../pages/Projects";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "projects",
              element: <Projects />,
            },
            {
              path: "lab",
              element: <Lab />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/portfolio", // 💡 Ajouté ici : cela indique à React Router que l'application commence après "/portfolio"
  },
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
